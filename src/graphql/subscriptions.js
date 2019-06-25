// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateUserImages = `subscription OnCreateUserImages {
  onCreateUserImages {
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
export const onUpdateUserImages = `subscription OnUpdateUserImages {
  onUpdateUserImages {
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
export const onDeleteUserImages = `subscription OnDeleteUserImages {
  onDeleteUserImages {
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
export const onCreateCompany = `subscription OnCreateCompany {
  onCreateCompany {
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
export const onUpdateCompany = `subscription OnUpdateCompany {
  onUpdateCompany {
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
export const onDeleteCompany = `subscription OnDeleteCompany {
  onDeleteCompany {
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
export const onCreateCompanyImages = `subscription OnCreateCompanyImages {
  onCreateCompanyImages {
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
export const onUpdateCompanyImages = `subscription OnUpdateCompanyImages {
  onUpdateCompanyImages {
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
export const onDeleteCompanyImages = `subscription OnDeleteCompanyImages {
  onDeleteCompanyImages {
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
export const onCreatePackage = `subscription OnCreatePackage {
  onCreatePackage {
    id
    title
    price
    description
    level
  }
}
`;
export const onUpdatePackage = `subscription OnUpdatePackage {
  onUpdatePackage {
    id
    title
    price
    description
    level
  }
}
`;
export const onDeletePackage = `subscription OnDeletePackage {
  onDeletePackage {
    id
    title
    price
    description
    level
  }
}
`;
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
export const onCreatePostImage = `subscription OnCreatePostImage {
  onCreatePostImage {
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
export const onUpdatePostImage = `subscription OnUpdatePostImage {
  onUpdatePostImage {
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
export const onDeletePostImage = `subscription OnDeletePostImage {
  onDeletePostImage {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
export const onCreateEvent = `subscription OnCreateEvent {
  onCreateEvent {
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
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
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
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
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
export const onCreateEventImage = `subscription OnCreateEventImage {
  onCreateEventImage {
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
export const onUpdateEventImage = `subscription OnUpdateEventImage {
  onUpdateEventImage {
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
export const onDeleteEventImage = `subscription OnDeleteEventImage {
  onDeleteEventImage {
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
