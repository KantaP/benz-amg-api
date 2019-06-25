// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    username
    birthDate
    firstName
    lastName
    mobilePhone
    email
    amgId
    images {
      items {
        id
        url
        owner
      }
      nextToken
    }
    companies {
      items {
        id
        owner
        name
        address
        latlng
        website
      }
      nextToken
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    username
    birthDate
    firstName
    lastName
    mobilePhone
    email
    amgId
    images {
      items {
        id
        url
        owner
      }
      nextToken
    }
    companies {
      items {
        id
        owner
        name
        address
        latlng
        website
      }
      nextToken
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    username
    birthDate
    firstName
    lastName
    mobilePhone
    email
    amgId
    images {
      items {
        id
        url
        owner
      }
      nextToken
    }
    companies {
      items {
        id
        owner
        name
        address
        latlng
        website
      }
      nextToken
    }
  }
}
`;
export const createUserImages = `mutation CreateUserImages($input: CreateUserImagesInput!) {
  createUserImages(input: $input) {
    id
    url
    owner
    user {
      id
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      images {
        nextToken
      }
      companies {
        nextToken
      }
    }
  }
}
`;
export const updateUserImages = `mutation UpdateUserImages($input: UpdateUserImagesInput!) {
  updateUserImages(input: $input) {
    id
    url
    owner
    user {
      id
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      images {
        nextToken
      }
      companies {
        nextToken
      }
    }
  }
}
`;
export const deleteUserImages = `mutation DeleteUserImages($input: DeleteUserImagesInput!) {
  deleteUserImages(input: $input) {
    id
    url
    owner
    user {
      id
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      images {
        nextToken
      }
      companies {
        nextToken
      }
    }
  }
}
`;
export const createCompany = `mutation CreateCompany($input: CreateCompanyInput!) {
  createCompany(input: $input) {
    id
    owner
    user {
      id
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      images {
        nextToken
      }
      companies {
        nextToken
      }
    }
    name
    address
    latlng
    website
    images {
      items {
        id
        url
        owner
      }
      nextToken
    }
  }
}
`;
export const updateCompany = `mutation UpdateCompany($input: UpdateCompanyInput!) {
  updateCompany(input: $input) {
    id
    owner
    user {
      id
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      images {
        nextToken
      }
      companies {
        nextToken
      }
    }
    name
    address
    latlng
    website
    images {
      items {
        id
        url
        owner
      }
      nextToken
    }
  }
}
`;
export const deleteCompany = `mutation DeleteCompany($input: DeleteCompanyInput!) {
  deleteCompany(input: $input) {
    id
    owner
    user {
      id
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      images {
        nextToken
      }
      companies {
        nextToken
      }
    }
    name
    address
    latlng
    website
    images {
      items {
        id
        url
        owner
      }
      nextToken
    }
  }
}
`;
export const createCompanyImages = `mutation CreateCompanyImages($input: CreateCompanyImagesInput!) {
  createCompanyImages(input: $input) {
    id
    url
    owner
    company {
      id
      owner
      user {
        id
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
      }
      name
      address
      latlng
      website
      images {
        nextToken
      }
    }
  }
}
`;
export const updateCompanyImages = `mutation UpdateCompanyImages($input: UpdateCompanyImagesInput!) {
  updateCompanyImages(input: $input) {
    id
    url
    owner
    company {
      id
      owner
      user {
        id
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
      }
      name
      address
      latlng
      website
      images {
        nextToken
      }
    }
  }
}
`;
export const deleteCompanyImages = `mutation DeleteCompanyImages($input: DeleteCompanyImagesInput!) {
  deleteCompanyImages(input: $input) {
    id
    url
    owner
    company {
      id
      owner
      user {
        id
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
      }
      name
      address
      latlng
      website
      images {
        nextToken
      }
    }
  }
}
`;
export const createPackage = `mutation CreatePackage($input: CreatePackageInput!) {
  createPackage(input: $input) {
    id
    title
    price
    description
    level
  }
}
`;
export const updatePackage = `mutation UpdatePackage($input: UpdatePackageInput!) {
  updatePackage(input: $input) {
    id
    title
    price
    description
    level
  }
}
`;
export const deletePackage = `mutation DeletePackage($input: DeletePackageInput!) {
  deletePackage(input: $input) {
    id
    title
    price
    description
    level
  }
}
`;
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    content
    enableComment
    tags
    location {
      placeName
      placeLatLng
    }
    images {
      items {
        id
        url
      }
      nextToken
    }
    comments {
      items {
        id
        content
        owner
      }
      nextToken
    }
    owner
    createdAt
    updatedAt
  }
}
`;
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
    id
    content
    enableComment
    tags
    location {
      placeName
      placeLatLng
    }
    images {
      items {
        id
        url
      }
      nextToken
    }
    comments {
      items {
        id
        content
        owner
      }
      nextToken
    }
    owner
    createdAt
    updatedAt
  }
}
`;
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
    id
    content
    enableComment
    tags
    location {
      placeName
      placeLatLng
    }
    images {
      items {
        id
        url
      }
      nextToken
    }
    comments {
      items {
        id
        content
        owner
      }
      nextToken
    }
    owner
    createdAt
    updatedAt
  }
}
`;
export const createPostImage = `mutation CreatePostImage($input: CreatePostImageInput!) {
  createPostImage(input: $input) {
    id
    url
    post {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      images {
        nextToken
      }
      comments {
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
}
`;
export const updatePostImage = `mutation UpdatePostImage($input: UpdatePostImageInput!) {
  updatePostImage(input: $input) {
    id
    url
    post {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      images {
        nextToken
      }
      comments {
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
}
`;
export const deletePostImage = `mutation DeletePostImage($input: DeletePostImageInput!) {
  deletePostImage(input: $input) {
    id
    url
    post {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      images {
        nextToken
      }
      comments {
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
}
`;
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    content
    post {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      images {
        nextToken
      }
      comments {
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
    owner
  }
}
`;
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    id
    content
    post {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      images {
        nextToken
      }
      comments {
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
    owner
  }
}
`;
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    id
    content
    post {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      images {
        nextToken
      }
      comments {
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
    owner
  }
}
`;
export const createEvent = `mutation CreateEvent($input: CreateEventInput!) {
  createEvent(input: $input) {
    id
    title
    startTime
    endTime
    description
    images {
      items {
        id
        url
      }
      nextToken
    }
  }
}
`;
export const updateEvent = `mutation UpdateEvent($input: UpdateEventInput!) {
  updateEvent(input: $input) {
    id
    title
    startTime
    endTime
    description
    images {
      items {
        id
        url
      }
      nextToken
    }
  }
}
`;
export const deleteEvent = `mutation DeleteEvent($input: DeleteEventInput!) {
  deleteEvent(input: $input) {
    id
    title
    startTime
    endTime
    description
    images {
      items {
        id
        url
      }
      nextToken
    }
  }
}
`;
export const createEventImage = `mutation CreateEventImage($input: CreateEventImageInput!) {
  createEventImage(input: $input) {
    id
    url
    event {
      id
      title
      startTime
      endTime
      description
      images {
        nextToken
      }
    }
  }
}
`;
export const updateEventImage = `mutation UpdateEventImage($input: UpdateEventImageInput!) {
  updateEventImage(input: $input) {
    id
    url
    event {
      id
      title
      startTime
      endTime
      description
      images {
        nextToken
      }
    }
  }
}
`;
export const deleteEventImage = `mutation DeleteEventImage($input: DeleteEventImageInput!) {
  deleteEventImage(input: $input) {
    id
    url
    event {
      id
      title
      startTime
      endTime
      description
      images {
        nextToken
      }
    }
  }
}
`;
