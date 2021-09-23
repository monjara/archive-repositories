<?php


namespace App\Entity\Master;


use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\InheritanceType;
use Doctrine\ORM\Mapping\Table;

#[Entity]
#[Table(name: "m_sex")]
#[InheritanceType(value: "SINGLE_TABLE")]
class Sex extends AbstractMasterEntity
{

}