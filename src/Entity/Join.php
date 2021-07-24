<?php


namespace App\Entity;


use DateTime;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\InheritanceType;
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\ORM\Mapping\Table;

#[Entity]
#[Table(name: "d_join")]
#[InheritanceType(value: "SINGLE_TABLE")]
class Join extends AbstractEntity
{
    #[Id]
    #[Column(name: "id", type: "integer", options: ["unsigned" => true])]
    #[GeneratedValue(strategy: "IDENTITY")]
    private int $id;

    #[Column(name: "title", type: "string", length: 255)]
    private string $title;

    #[Column(name: "position", type: "string", length: 255)]
    private string $position;

    #[Column(name: "project_detail", type: "string", length: 4000)]
    private string $project_detail;

    #[Column(name: "start_date", type: "datetimetz")]
    private DateTime $start_date;

    #[Column(name: "end_date", type: "datetimetz")]
    private Datetime $end_date;

    #[OneToMany(mappedBy: "join", targetEntity: "JoinSkills", cascade: ["persist", "remove"])]
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
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param string $title
     */
    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    /**
     * @return string
     */
    public function getPosition(): string
    {
        return $this->position;
    }

    /**
     * @param string $position
     */
    public function setPosition(string $position): void
    {
        $this->position = $position;
    }

    /**
     * @return string
     */
    public function getProjectDetail(): string
    {
        return $this->project_detail;
    }

    /**
     * @param string $project_detail
     */
    public function setProjectDetail(string $project_detail): void
    {
        $this->project_detail = $project_detail;
    }

    /**
     * @return DateTime
     */
    public function getStartDate(): DateTime
    {
        return $this->start_date;
    }

    /**
     * @param DateTime $start_date
     */
    public function setStartDate(DateTime $start_date): void
    {
        $this->start_date = $start_date;
    }

    /**
     * @return DateTime
     */
    public function getEndDate(): DateTime
    {
        return $this->end_date;
    }

    /**
     * @param DateTime $end_date
     */
    public function setEndDate(DateTime $end_date): void
    {
        $this->end_date = $end_date;
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