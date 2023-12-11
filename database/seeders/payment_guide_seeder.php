<?php

namespace Database\Seeders;

use Faker\Provider\Lorem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class payment_guide_seeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('payment_guide')->insert([
            'des'=>"<p>Je suis Développeur Web Full Stack</p><p>Je m'appelle Sohrab Hossain. Titulaire d'une licence professionnelle à Paris j'ai été dévéloppeur front-end puis back-end sur différents frameworks et projets variés. Pour cette fois, j'ai fait tous les types de projets.</p><p>Mon design est simple et frais. Je travaille de manière flexible avec les clients pour répondre à leurs besoins de conception et de développement</p><p>Je cherche aujourd'hui un contrat de cdd, cdi, professionnalisation.</p>",
            'price'=>'200BDT',
            'banner'=>'storage/offer.png'
        ]);
    }
}
