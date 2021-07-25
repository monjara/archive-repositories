<?php


namespace App\Repository;


use App\Entity\Join;
use Doctrine\Persistence\ManagerRegistry;

class JoinRepository extends AbstractRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Join::class);
    }
}