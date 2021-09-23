<?php


namespace App\Repository\Master;


use App\Entity\Master\Prefecture;
use App\Repository\AbstractRepository;
use Doctrine\Persistence\ManagerRegistry;

class PrefectureRepository extends AbstractRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Prefecture::class);
    }
}