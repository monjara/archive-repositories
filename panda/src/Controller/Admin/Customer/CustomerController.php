<?php


namespace App\Controller\Admin\Customer;


use Symfony\Component\Routing\Annotation\Route;

/**
 * Class CustomerController
 * @package App\Controller\Admin\Customer
 */
class CustomerController
{
    #[Route(path: '/%admin_route%/customer', name: 'admin_customer')]
    public function index()
    {

    }
}