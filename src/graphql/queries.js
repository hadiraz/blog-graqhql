import { gql } from "@apollo/client";

export const GET_BLOGS_INFO = gql`
query {
   contents {
    title
    slug 
    id
    coverImage {
      url
    }
    description {
      text
    }
    author {
      name
      image {
         url
      }
    }
   }
}
`
export const GET_BLOG_INFO = gql`
query getBlog($slug: String) {
  content(where: {slug: $slug}) {
    title
    slug
    id
    coverImage {
      url
    }
    description {
      html
    }
    author {
      name
      career
      image {
        url
      }
    }
  }
}

`
export const GET_AUTHORS = gql`
query {
  authors {
    id
    name
    slug
    image {
      url
    }
  }
}
`
export const GET_AUTHOR = gql`
query getAuthor ($slug : String) {
  author (where : {slug : $slug}) {
    id
    name
    slug
    career
    documentInStages {
      contents {
    title
    slug 
    id
    coverImage {
      url
        }
      }
    }
    description {
      html
    }
    image {
      url
    }
  }
}
`
export const GET_COMMENTS = gql`
query getComments( $slug:String ){
  comments(where:{content:{slug:$slug}}) {
    name
    description
    id
  }
}
`
