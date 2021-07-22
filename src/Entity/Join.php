<?php


namespace App\Entity;


use DateTime;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Class Join
 * @package App\Entity
 *
 * @ORM\Table(name="d_join")
 * @ORM\InheritanceType("SINGLE_TABLE")
 */
class Join extends AbstractEntity
{
    /**
     * @var integer
     * @ORM\Id
     * @ORM\Column(name="id", type="integer", options={"unsigned":true})
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(name="title", type="string", length=255)
     */
    private $title;

    /**
     * @var string
     * @ORM\Column(name="position", type="string", length=255)
     */
    private $position;

    /**
     * @var string
     * @ORM\Column(name="project_detail", type="string", length=4000)
     */
    private $project_detail;

    /**
     * @var DateTime
     * @ORM\Column(name="start_date", type="datetimetz")
     */
    private $start_date;

    /**
     * @var DateTime
     * @ORM\Column(name="end_date", type="datetimetz")
     */
    private $end_date;

    /**
     * @var Collection
     * @ORM\OneToMany(targetEntity="Entity\JoinSkills" mappedBy="join", cascade={"persist", "remove"})
     */
    private $JoinSkills;

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