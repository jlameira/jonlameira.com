import { NextSeo } from 'next-seo'
import SocialLinks from '@/components/SocialLinks'

import { MainContent } from '@/styles/base'

const AboutPage = () => (
  <>
    <NextSeo
      title="Sobre mim | jonathan Lameira"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url: 'https://jonlameira.com',
        site_name: 'Jonathan Lameira',
        title: 'Jonathan Lameira',
        images: [
          {
            url: 'https://jonlameira/assets/img/blog-cover.png',
            width: 1200,
            height: 630,
            alt: 'Jonathan Lameira Blog'
          }
        ]
      }}
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Meu nome é Jonathan Lameira , nasci em Belém/PA,
        trabalho como Software Engineer no{' '}
        <a href="https://www.mercadolivre.com.br/">Mercado Livre</a>
      </p>

      <p>
        Já passei por empresas como{' '}
        <a
          href="https://ciandt.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CI&T (CIANDT)
        </a>
        ,{' '}
        <a
          href="https://www.pdcase.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          PDCase
        </a>
        ,{' '}
        <a
          href="https://www.frameworkdigital.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Framework System
        </a>
        ,{' '}
        e outras mais. Cursei Ciência da computação no{' '}
        <a
            href="https://www.cesupa.br/"
            target="_blank"
            rel="noopener noreferrer"
        >
          CESUPA
        </a>
        ,{' '}
        no ano de 2003
      </p>
      <p>
        Atualmente estou fazendo uma Pós graduação em Arquitetura de Software, Ciência de Dados e Cybersecurity na{' '}
        <a
            href="https://posdigital.pucpr.br"
            target="_blank"
            rel="noopener noreferrer"
        >
          PUC PR
        </a>
      </p>

      <p>
        Sou apaixonado por tecnologia, e por isso estou sempre estudando e aprendendo novas tecnologias.
        Atualmente estou estudando sobre Golang, Kotlin, React, React Native, NodeJS, Typescript, Docker, Kubernetes, AWS, GCP, Azure, entre outras tecnologias.

      </p>

      <h2>Contato</h2>

      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </>
)

export default AboutPage
