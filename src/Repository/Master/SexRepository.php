<?php


namespace App\Repository\Master;


use App\Entity\Master\Sex;
use App\Repository\AbstractRepository;
use Doctrine\Persistence\ManagerRegistry;

class SexRepository extends AbstractRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Sex::class);
    }
}