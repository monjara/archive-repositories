<?php


namespace App\Controller\Admin\Member;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class SkillController
 * @package App\Controller\Admin\Member
 */
class SkillController extends AbstractController
{
    #[Route(path: '/%admin_route%/skill', name: 'admin_skill')]
    public function index(Request $request) : Response
    {
        $test = 'こちらてすとです';
        $contents = $this->renderView('admin/member/skill.twig',[
            'test' => $test,
        ]);
        return new Response($contents);
    }

}