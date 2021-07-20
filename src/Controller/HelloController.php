<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HelloController {

    /**
     * @Route ("/hello", name="hello")
     * @param Request $request
     * @return Response
     */
    public function index(Request $request): Response
    {
        return new Response(
            '<html><body>'.$request.'</body></html>'
        );
    }
}