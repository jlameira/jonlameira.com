import styled from 'styled-components'
import media from 'styled-media-query'
import transitions from './transitions'

export const PostHeader = styled.header`
  color: var(--postColor);
  margin: auto;
  max-width: 70rem;
  padding: 5rem 5rem 0;

  ${media.lessThan('large')`
    padding: 3rem 0 0;
    max-width: 100%;
  `}
`

export const PostTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;

  ${media.lessThan('large')`
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
  `}
`

export const PostDescription = styled.h2`
  font-size: 2rem;
  font-weight: 200;
  padding: 0 1.4rem;

  ${media.lessThan('large')`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`

export const ButtonBack = styled.a`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  margin: 0 0 1.5rem 1.5rem;
  transition: ${transitions.COLOR};

  ${media.lessThan('large')`
    margin: 0 0 1.5rem 1rem;
  `}

  &:hover {
    color: var(--highlight);
  }
`

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 100;
  padding: 0 1.4rem;

  ${media.lessThan('large')`
    padding: 0 1rem;
  `}
`

export const MainContent = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 2rem 5rem;

  ${media.lessThan('large')`
    padding: 2rem 0;
    max-width: 100%;
  `}

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--postColor);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;

    ${media.lessThan('large')`
      padding: 0 1rem;
      word-break: break-word;
    `}
  }

  p {
    margin: 0 auto 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }

  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }

  li {
    padding: 0.625rem 0;

    & > ul {
      margin-bottom: 0;
    }
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  code {
    background: #2d2d2d;
    color: white;
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
    overflow-wrap: break-word;
    font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
    line-height: 1.6;
  }

  pre > code {
    white-space: pre;
  }

  img {
    display: block;
    width: auto;
    max-width: 100%;
    margin: 1.875rem auto;
  }

  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;

    ${media.greaterThan('large')`
      height: 490px;
    `}

    ${media.lessThan('large')`
      padding: 0 1rem;
    `}
  }

  blockquote {
    color: var(--postColor);
    border-left: 0.3rem solid var(--highlight);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }

  hr {
    border: 1px solid var(--borders);
    margin: 3rem auto;
  }

  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }

  h1 {
    font-size: 2.8rem;

    ${media.lessThan('large')`
      font-size: 1.875rem;
    `}
  }

  h2 {
    font-size: 2.1rem;

    ${media.lessThan('large')`
      font-size: 1.375rem;
    `}
  }

  h3 {
    font-size: 1.6rem;

    ${media.lessThan('large')`
      font-size: 1.125rem;
    `}
  }

  h4 {
    font-size: 1.4rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  strong {
    font-weight: 700;
  }

  .instagram-media {
    margin: 1rem auto !important;
  }

  a {
    border-bottom: 1px dashed var(--highlight);
    color: var(--highlight);
    text-decoration: none;
    transition: opacity 0.5s;

    svg {
      color: var(--postColor);
    }

    &:hover {
      opacity: 0.8;
    }
  }

  .anchor {
    position: relative;
    border: 0;
    color: var(--postColor);
    text-decoration: none;

    &:before {
      content: '#';
      position: absolute;
      left: -35px;
      opacity: 0;
    }

    &:hover:before {
      opacity: 1;
    }
  }
`
