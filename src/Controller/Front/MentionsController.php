<?php

namespace App\Controller\Front;

use App\Repository\PostRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MentionsController extends AbstractController
{
    /**
     * @Route("/mentions-legales", name="mentions")
     */
    public function index(PostRepository $postRepository): Response
    {
        return $this->render('front/mentions.html.twig');
    }
}