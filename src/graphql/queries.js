// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getUserImages = `query GetUserImages($id: ID!) {
  getUserImages(id: $id) {
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
export const listUserImagess = `query ListUserImagess(
  $filter: ModelUserImagesFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserImagess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      }
    }
    nextToken
  }
}
`;
export const getCompany = `query GetCompany($id: ID!) {
  getCompany(id: $id) {
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
export const listCompanys = `query ListCompanys(
  $filter: ModelCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getCompanyImages = `query GetCompanyImages($id: ID!) {
  getCompanyImages(id: $id) {
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
export const listCompanyImagess = `query ListCompanyImagess(
  $filter: ModelCompanyImagesFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanyImagess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      url
      owner
      company {
        id
        owner
        name
        address
        latlng
        website
      }
    }
    nextToken
  }
}
`;
export const getPackage = `query GetPackage($id: ID!) {
  getPackage(id: $id) {
    id
    title
    price
    description
    level
  }
}
`;
export const listPackages = `query ListPackages(
  $filter: ModelPackageFilterInput
  $limit: Int
  $nextToken: String
) {
  listPackages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      price
      description
      level
    }
    nextToken
  }
}
`;
export const getPost = `query GetPost($createdAt: String!) {
  getPost(createdAt: $createdAt) {
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
export const listPosts = `query ListPosts(
  $createdAt: String
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(
    createdAt: $createdAt
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const getPostImage = `query GetPostImage($id: ID!) {
  getPostImage(id: $id) {
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
export const listPostImages = `query ListPostImages(
  $filter: ModelPostImageFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      url
      post {
        id
        content
        enableComment
        tags
        owner
        createdAt
        updatedAt
      }
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
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
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      post {
        id
        content
        enableComment
        tags
        owner
        createdAt
        updatedAt
      }
      owner
    }
    nextToken
  }
}
`;
export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
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
export const listEvents = `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      startTime
      endTime
      description
      images {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getEventImage = `query GetEventImage($id: ID!) {
  getEventImage(id: $id) {
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
export const listEventImages = `query ListEventImages(
  $filter: ModelEventImageFilterInput
  $limit: Int
  $nextToken: String
) {
  listEventImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      url
      event {
        id
        title
        startTime
        endTime
        description
      }
    }
    nextToken
  }
}
`;
