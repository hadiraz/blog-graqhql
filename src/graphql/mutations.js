import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
mutation SetComment ($email:String! , $name:String! , $description:String! , $slug:String!){
    createComment(
        data : {
        name : $name ,
        description : $description ,
        email : $email ,
        content: {
            connect: { slug: $slug }
            }
        }
    ){
        id
    }
}
`

/*mutation MyMutation($slug: String = "title2", $email: String = "ugbugbugg@ygoo.com") {
    createComment(
      data: {name: "pk", description: "pkpk", content: {connect: {slug: $slug}}, email: $email}
    ) {
      id
      name
    }
  }*/