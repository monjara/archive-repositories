<?php


namespace App\Entity\Master;


use Doctrine\ORM\Mapping as ORM;

/**
 * Class AbstractMasterEntity
 * @package App\Entity\Master
 */
class AbstractMasterEntity
{
    /**
     * @var int
     *
     * @ORM\Id
     * @ORM\Column(name="id", type="smallint", options={"unsigned":true})
     */
    protected $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    protected $name;

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
}