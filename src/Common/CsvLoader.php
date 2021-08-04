<?php


namespace App\Common;


use http\Exception\InvalidArgumentException;
use Symfony\Component\Filesystem\Exception\FileNotFoundException;
use Symfony\Component\Yaml\Yaml;

class CsvLoader
{
    public function loadFromDirectory(string $dir)
    {
        if (!is_dir($dir)) {
            throw new InvalidArgumentException(sprintf('"%s" does not exist', $dir));
        }

        $file = $dir . '/definition.yml';
        if (!file_exists($file)) {
            throw new FileNotFoundException('"%s" does not exist', $file);
        }

        $definition = Yaml::parseFile($file);
    }
}