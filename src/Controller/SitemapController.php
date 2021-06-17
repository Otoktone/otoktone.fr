<?php

namespace App\Controller;

use App\Entity\Post;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SitemapController extends AbstractController
{
    /**
    * @Route("/sitemap.xml", name="sitemap", defaults={"_format"="xml"})
    */
    public function index(Request $request)
    {
        // Nous récupérons le nom d'hôte depuis l'URL
        $hostname = $request->getSchemeAndHttpHost();

        // On initialise un tableau pour lister les URLs
        $urls = [];

        // On ajoute les URLs "statiques"
        $urls[] = ['loc' => $this->generateUrl('home')];
        $urls[] = ['loc' => $this->generateUrl('otoktone')];
        $urls[] = ['loc' => $this->generateUrl('portfolio')];
        $urls[] = ['loc' => $this->generateUrl('contact')];
        $urls[] = ['loc' => $this->generateUrl('mentions')];

        $urls[] = ['loc' => $this->generateUrl('app_login')];

        // add dynamic urls, like blog posts from your DB
        foreach ($this->getDoctrine()->getRepository(Post::class)->findAll() as $post) {
            $created_at = $post->getCreatedAt();

            $images = [
                'loc' => '/uploads/images/'.$post->getImage(), // URL to image
                'title' => $post->getTitle()    // Optional, text describing the image
            ];

            $urls[] = [
                'loc' => $this->generateUrl('post_index', [
                    'slug' => $post->getSlug(),
                ]),
                'lastmod' => $post->getUpdatedAt()->format('Y-m-d'),
                'image' => $images
            ];
        }

        // Fabrication de la réponse XML
        $response = new Response(
            $this->renderView('sitemap/index.html.twig', ['urls' => $urls,
                'hostname' => $hostname]),
            200
        );

        // Ajout des entêtes
        $response->headers->set('Content-Type', 'text/xml');

        // On envoie la réponse
        return $response;
    }
}
