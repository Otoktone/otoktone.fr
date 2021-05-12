<?php

namespace App\Controller\Front;

use App\Repository\PostRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PortfolioController extends AbstractController
{
    /**
     * @Route("/portfolio", name="portfolio")
     */
    public function index(PostRepository $postRepository): Response
    {
        return $this->render('front/portfolio.html.twig', [
            'posts' => $postRepository->findAll()
        ]);
    }
}