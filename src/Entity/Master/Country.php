<?php


namespace App\Entity\Master;


use Doctrine\ORM\Mapping as ORM;

/**
 * Class Country
 * @package App\Entity\Master
 *
 * @ORM\Table(name="m_country")
 * @ORM\InheritanceType("SINGLE_TABLE")
 */
class Country extends AbstractMasterEntity
{

}