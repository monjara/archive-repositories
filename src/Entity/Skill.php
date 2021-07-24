<?php


namespace App\Entity;


use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\InheritanceType;
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\ORM\Mapping\Table;

#[Entity]
#[Table(name: "d_skill")]
#[InheritanceType(value: "SINGLE_TABLE")]
class Skill extends AbstractEntity
{
    #[Id]
    #[Column(name: "id", type: "integer", options: ["unsigned" => true])]
    #[GeneratedValue(strategy: "IDENTITY")]
    private int $id;

    #[Column(name: "name", type: "string", length: 255)]
    private string $name;

    #[OneToMany(mappedBy: "string", targetEntity: "JoinSkills", cascade: ["persist", "remove"])]
    private Collection $JoinSkills;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId(int $id): void
    {
        $this->id = $id;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * @return Collection
     */
    public function getJoinSkills(): Collection
    {
        return $this->JoinSkills;
    }

    /**
     * @param Collection $JoinSkills
     */
    public function setJoinSkills(Collection $JoinSkills): void
    {
        $this->JoinSkills = $JoinSkills;
    }

}