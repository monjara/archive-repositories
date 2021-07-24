<?php


namespace App\Entity\Master;


use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\InheritanceType;
use Doctrine\ORM\Mapping\Table;

#[Entity]
#[Table(name: "m_country")]
#[InheritanceType(value: "SINGLE_TABLE")]
class Country extends AbstractMasterEntity
{

}