<?php

namespace App\Controller\Front;

use App\Repository\PostRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class OtoktoneController extends AbstractController
{
    /**
     * @Route("/otoktone", name="otoktone")
     */
    public function index(PostRepository $postRepository): Response
    {
        return $this->render('front/otoktone.html.twig', [
            'posts' => $postRepository->findAll()
        ]);
    }
}