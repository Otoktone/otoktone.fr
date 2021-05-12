<?php

namespace App\Controller\Front;

use App\Repository\PostRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContactController extends AbstractController
{
    /**
     * @Route("/contact", name="contact")
     */
    public function index(PostRepository $postRepository): Response
    {
        return $this->render('front/contact.html.twig', [
            'posts' => $postRepository->findAll()
        ]);
    }
}