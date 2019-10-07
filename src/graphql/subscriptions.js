// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    staffID
    username
    birthDate
    firstName
    lastName
    mobilePhone
    email
    amgId
    amgModel
    amgShowroom
    nickName
    citizenId
    image
    address
    subDistrict
    district
    province
    active
    pushToken
    type
    expireAt
    level
    createdAt
    images {
      items {
        id
        uri
        owner
      }
      nextToken
    }
    companies {
      items {
        id
        name
        description
        phone
        address
        latlng
        website
        email
        image
        logo
        createdAt
      }
      nextToken
    }
    postsOfUser {
      items {
        id
        content
        enableComment
        tags
        owner
        type
        createdAt
        countComment
        countRefer
        countRadeem
        countBookmark
        countReport
        countConnect
        radeemQuota
        expireAtUnix
        expireAt
        expire
        pin
        createdAtUnix
        expireRedeemAt
        expireRedeemAtUnix
        redeemImage
        redeemDescription
      }
      nextToken
    }
    userComments {
      items {
        id
        content
        postId
        userId
        createdAtUnix
        createdAt
      }
      nextToken
    }
    userReports {
      items {
        id
        type
        status
        description
        createdAt
      }
      nextToken
    }
    userBookmarks {
      items {
        id
        userBookmarkCode
        createdAt
      }
      nextToken
    }
    referrers {
      items {
        id
        referrer
        receiver
        createdAt
      }
      nextToken
    }
    receivers {
      items {
        id
        referrer
        receiver
        createdAt
      }
      nextToken
    }
    userRadeem {
      items {
        id
        postId
        userId
        createdAt
      }
      nextToken
    }
    userEvents {
      items {
        id
        eventId
        userId
        eventStartTimeUnix
        eventEndTime
        createdAt
      }
      nextToken
    }
    reportComments {
      items {
        id
        commentId
        reporterId
        createdAtUnix
        createdAt
      }
      nextToken
    }
    userBlocks {
      items {
        id
        userId
        blockUserId
        createdAtUnix
        createdAt
      }
      nextToken
    }
    events {
      items {
        id
        title
        startTime
        endTime
        description
        image
        quota
        createdAt
        upcoming
      }
      nextToken
    }
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    staffID
    username
    birthDate
    firstName
    lastName
    mobilePhone
    email
    amgId
    amgModel
    amgShowroom
    nickName
    citizenId
    image
    address
    subDistrict
    district
    province
    active
    pushToken
    type
    expireAt
    level
    createdAt
    images {
      items {
        id
        uri
        owner
      }
      nextToken
    }
    companies {
      items {
        id
        name
        description
        phone
        address
        latlng
        website
        email
        image
        logo
        createdAt
      }
      nextToken
    }
    postsOfUser {
      items {
        id
        content
        enableComment
        tags
        owner
        type
        createdAt
        countComment
        countRefer
        countRadeem
        countBookmark
        countReport
        countConnect
        radeemQuota
        expireAtUnix
        expireAt
        expire
        pin
        createdAtUnix
        expireRedeemAt
        expireRedeemAtUnix
        redeemImage
        redeemDescription
      }
      nextToken
    }
    userComments {
      items {
        id
        content
        postId
        userId
        createdAtUnix
        createdAt
      }
      nextToken
    }
    userReports {
      items {
        id
        type
        status
        description
        createdAt
      }
      nextToken
    }
    userBookmarks {
      items {
        id
        userBookmarkCode
        createdAt
      }
      nextToken
    }
    referrers {
      items {
        id
        referrer
        receiver
        createdAt
      }
      nextToken
    }
    receivers {
      items {
        id
        referrer
        receiver
        createdAt
      }
      nextToken
    }
    userRadeem {
      items {
        id
        postId
        userId
        createdAt
      }
      nextToken
    }
    userEvents {
      items {
        id
        eventId
        userId
        eventStartTimeUnix
        eventEndTime
        createdAt
      }
      nextToken
    }
    reportComments {
      items {
        id
        commentId
        reporterId
        createdAtUnix
        createdAt
      }
      nextToken
    }
    userBlocks {
      items {
        id
        userId
        blockUserId
        createdAtUnix
        createdAt
      }
      nextToken
    }
    events {
      items {
        id
        title
        startTime
        endTime
        description
        image
        quota
        createdAt
        upcoming
      }
      nextToken
    }
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    staffID
    username
    birthDate
    firstName
    lastName
    mobilePhone
    email
    amgId
    amgModel
    amgShowroom
    nickName
    citizenId
    image
    address
    subDistrict
    district
    province
    active
    pushToken
    type
    expireAt
    level
    createdAt
    images {
      items {
        id
        uri
        owner
      }
      nextToken
    }
    companies {
      items {
        id
        name
        description
        phone
        address
        latlng
        website
        email
        image
        logo
        createdAt
      }
      nextToken
    }
    postsOfUser {
      items {
        id
        content
        enableComment
        tags
        owner
        type
        createdAt
        countComment
        countRefer
        countRadeem
        countBookmark
        countReport
        countConnect
        radeemQuota
        expireAtUnix
        expireAt
        expire
        pin
        createdAtUnix
        expireRedeemAt
        expireRedeemAtUnix
        redeemImage
        redeemDescription
      }
      nextToken
    }
    userComments {
      items {
        id
        content
        postId
        userId
        createdAtUnix
        createdAt
      }
      nextToken
    }
    userReports {
      items {
        id
        type
        status
        description
        createdAt
      }
      nextToken
    }
    userBookmarks {
      items {
        id
        userBookmarkCode
        createdAt
      }
      nextToken
    }
    referrers {
      items {
        id
        referrer
        receiver
        createdAt
      }
      nextToken
    }
    receivers {
      items {
        id
        referrer
        receiver
        createdAt
      }
      nextToken
    }
    userRadeem {
      items {
        id
        postId
        userId
        createdAt
      }
      nextToken
    }
    userEvents {
      items {
        id
        eventId
        userId
        eventStartTimeUnix
        eventEndTime
        createdAt
      }
      nextToken
    }
    reportComments {
      items {
        id
        commentId
        reporterId
        createdAtUnix
        createdAt
      }
      nextToken
    }
    userBlocks {
      items {
        id
        userId
        blockUserId
        createdAtUnix
        createdAt
      }
      nextToken
    }
    events {
      items {
        id
        title
        startTime
        endTime
        description
        image
        quota
        createdAt
        upcoming
      }
      nextToken
    }
  }
}
`;
export const onCreateUserImages = `subscription OnCreateUserImages {
  onCreateUserImages {
    id
    uri
    owner
    user {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
  }
}
`;
export const onUpdateUserImages = `subscription OnUpdateUserImages {
  onUpdateUserImages {
    id
    uri
    owner
    user {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
  }
}
`;
export const onDeleteUserImages = `subscription OnDeleteUserImages {
  onDeleteUserImages {
    id
    uri
    owner
    user {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
  }
}
`;
export const onCreateCompany = `subscription OnCreateCompany {
  onCreateCompany {
    id
    user {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    name
    description
    phone
    address
    latlng
    website
    email
    image
    logo
    createdAt
    images {
      items {
        id
        uri
        owner
        createdAt
      }
      nextToken
    }
  }
}
`;
export const onUpdateCompany = `subscription OnUpdateCompany {
  onUpdateCompany {
    id
    user {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    name
    description
    phone
    address
    latlng
    website
    email
    image
    logo
    createdAt
    images {
      items {
        id
        uri
        owner
        createdAt
      }
      nextToken
    }
  }
}
`;
export const onDeleteCompany = `subscription OnDeleteCompany {
  onDeleteCompany {
    id
    user {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    name
    description
    phone
    address
    latlng
    website
    email
    image
    logo
    createdAt
    images {
      items {
        id
        uri
        owner
        createdAt
      }
      nextToken
    }
  }
}
`;
export const onCreateCompanyImages = `subscription OnCreateCompanyImages {
  onCreateCompanyImages {
    id
    uri
    owner
    createdAt
    company {
      id
      user {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      name
      description
      phone
      address
      latlng
      website
      email
      image
      logo
      createdAt
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
    uri
    owner
    createdAt
    company {
      id
      user {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      name
      description
      phone
      address
      latlng
      website
      email
      image
      logo
      createdAt
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
    uri
    owner
    createdAt
    company {
      id
      user {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      name
      description
      phone
      address
      latlng
      website
      email
      image
      logo
      createdAt
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
    createdAt
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
    createdAt
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
    createdAt
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
    postImages {
      items {
        id
        uri
        createdAt
      }
      nextToken
    }
    postComments {
      items {
        id
        content
        postId
        userId
        createdAtUnix
        createdAt
      }
      nextToken
    }
    postOfUser {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    owner
    type
    createdAt
    refers {
      items {
        id
        referrer
        receiver
        createdAt
      }
      nextToken
    }
    postBookmarks {
      items {
        id
        userBookmarkCode
        createdAt
      }
      nextToken
    }
    reports {
      items {
        id
        type
        status
        description
        createdAt
      }
      nextToken
    }
    postRadeem {
      items {
        id
        postId
        userId
        createdAt
      }
      nextToken
    }
    countComment
    countRefer
    countRadeem
    countBookmark
    countReport
    countConnect
    radeemQuota
    expireAtUnix
    expireAt
    expire
    pin
    createdAtUnix
    expireRedeemAt
    expireRedeemAtUnix
    redeemImage
    redeemDescription
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
    postImages {
      items {
        id
        uri
        createdAt
      }
      nextToken
    }
    postComments {
      items {
        id
        content
        postId
        userId
        createdAtUnix
        createdAt
      }
      nextToken
    }
    postOfUser {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    owner
    type
    createdAt
    refers {
      items {
        id
        referrer
        receiver
        createdAt
      }
      nextToken
    }
    postBookmarks {
      items {
        id
        userBookmarkCode
        createdAt
      }
      nextToken
    }
    reports {
      items {
        id
        type
        status
        description
        createdAt
      }
      nextToken
    }
    postRadeem {
      items {
        id
        postId
        userId
        createdAt
      }
      nextToken
    }
    countComment
    countRefer
    countRadeem
    countBookmark
    countReport
    countConnect
    radeemQuota
    expireAtUnix
    expireAt
    expire
    pin
    createdAtUnix
    expireRedeemAt
    expireRedeemAtUnix
    redeemImage
    redeemDescription
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
    postImages {
      items {
        id
        uri
        createdAt
      }
      nextToken
    }
    postComments {
      items {
        id
        content
        postId
        userId
        createdAtUnix
        createdAt
      }
      nextToken
    }
    postOfUser {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    owner
    type
    createdAt
    refers {
      items {
        id
        referrer
        receiver
        createdAt
      }
      nextToken
    }
    postBookmarks {
      items {
        id
        userBookmarkCode
        createdAt
      }
      nextToken
    }
    reports {
      items {
        id
        type
        status
        description
        createdAt
      }
      nextToken
    }
    postRadeem {
      items {
        id
        postId
        userId
        createdAt
      }
      nextToken
    }
    countComment
    countRefer
    countRadeem
    countBookmark
    countReport
    countConnect
    radeemQuota
    expireAtUnix
    expireAt
    expire
    pin
    createdAtUnix
    expireRedeemAt
    expireRedeemAtUnix
    redeemImage
    redeemDescription
  }
}
`;
export const onCreatePostImage = `subscription OnCreatePostImage {
  onCreatePostImage {
    id
    uri
    postImage {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      postImages {
        nextToken
      }
      postComments {
        nextToken
      }
      postOfUser {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      owner
      type
      createdAt
      refers {
        nextToken
      }
      postBookmarks {
        nextToken
      }
      reports {
        nextToken
      }
      postRadeem {
        nextToken
      }
      countComment
      countRefer
      countRadeem
      countBookmark
      countReport
      countConnect
      radeemQuota
      expireAtUnix
      expireAt
      expire
      pin
      createdAtUnix
      expireRedeemAt
      expireRedeemAtUnix
      redeemImage
      redeemDescription
    }
    createdAt
  }
}
`;
export const onUpdatePostImage = `subscription OnUpdatePostImage {
  onUpdatePostImage {
    id
    uri
    postImage {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      postImages {
        nextToken
      }
      postComments {
        nextToken
      }
      postOfUser {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      owner
      type
      createdAt
      refers {
        nextToken
      }
      postBookmarks {
        nextToken
      }
      reports {
        nextToken
      }
      postRadeem {
        nextToken
      }
      countComment
      countRefer
      countRadeem
      countBookmark
      countReport
      countConnect
      radeemQuota
      expireAtUnix
      expireAt
      expire
      pin
      createdAtUnix
      expireRedeemAt
      expireRedeemAtUnix
      redeemImage
      redeemDescription
    }
    createdAt
  }
}
`;
export const onDeletePostImage = `subscription OnDeletePostImage {
  onDeletePostImage {
    id
    uri
    postImage {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      postImages {
        nextToken
      }
      postComments {
        nextToken
      }
      postOfUser {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      owner
      type
      createdAt
      refers {
        nextToken
      }
      postBookmarks {
        nextToken
      }
      reports {
        nextToken
      }
      postRadeem {
        nextToken
      }
      countComment
      countRefer
      countRadeem
      countBookmark
      countReport
      countConnect
      radeemQuota
      expireAtUnix
      expireAt
      expire
      pin
      createdAtUnix
      expireRedeemAt
      expireRedeemAtUnix
      redeemImage
      redeemDescription
    }
    createdAt
  }
}
`;
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
    id
    content
    postId
    userId
    createdAtUnix
    postComment {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      postImages {
        nextToken
      }
      postComments {
        nextToken
      }
      postOfUser {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      owner
      type
      createdAt
      refers {
        nextToken
      }
      postBookmarks {
        nextToken
      }
      reports {
        nextToken
      }
      postRadeem {
        nextToken
      }
      countComment
      countRefer
      countRadeem
      countBookmark
      countReport
      countConnect
      radeemQuota
      expireAtUnix
      expireAt
      expire
      pin
      createdAtUnix
      expireRedeemAt
      expireRedeemAtUnix
      redeemImage
      redeemDescription
    }
    userComment {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    reportComments {
      items {
        id
        commentId
        reporterId
        createdAtUnix
        createdAt
      }
      nextToken
    }
    createdAt
  }
}
`;
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
    id
    content
    postId
    userId
    createdAtUnix
    postComment {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      postImages {
        nextToken
      }
      postComments {
        nextToken
      }
      postOfUser {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      owner
      type
      createdAt
      refers {
        nextToken
      }
      postBookmarks {
        nextToken
      }
      reports {
        nextToken
      }
      postRadeem {
        nextToken
      }
      countComment
      countRefer
      countRadeem
      countBookmark
      countReport
      countConnect
      radeemQuota
      expireAtUnix
      expireAt
      expire
      pin
      createdAtUnix
      expireRedeemAt
      expireRedeemAtUnix
      redeemImage
      redeemDescription
    }
    userComment {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    reportComments {
      items {
        id
        commentId
        reporterId
        createdAtUnix
        createdAt
      }
      nextToken
    }
    createdAt
  }
}
`;
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
    id
    content
    postId
    userId
    createdAtUnix
    postComment {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      postImages {
        nextToken
      }
      postComments {
        nextToken
      }
      postOfUser {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      owner
      type
      createdAt
      refers {
        nextToken
      }
      postBookmarks {
        nextToken
      }
      reports {
        nextToken
      }
      postRadeem {
        nextToken
      }
      countComment
      countRefer
      countRadeem
      countBookmark
      countReport
      countConnect
      radeemQuota
      expireAtUnix
      expireAt
      expire
      pin
      createdAtUnix
      expireRedeemAt
      expireRedeemAtUnix
      redeemImage
      redeemDescription
    }
    userComment {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    reportComments {
      items {
        id
        commentId
        reporterId
        createdAtUnix
        createdAt
      }
      nextToken
    }
    createdAt
  }
}
`;
export const onCreatePostReferSecond = `subscription OnCreatePostReferSecond {
  onCreatePostReferSecond {
    id
    post {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      postImages {
        nextToken
      }
      postComments {
        nextToken
      }
      postOfUser {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      owner
      type
      createdAt
      refers {
        nextToken
      }
      postBookmarks {
        nextToken
      }
      reports {
        nextToken
      }
      postRadeem {
        nextToken
      }
      countComment
      countRefer
      countRadeem
      countBookmark
      countReport
      countConnect
      radeemQuota
      expireAtUnix
      expireAt
      expire
      pin
      createdAtUnix
      expireRedeemAt
      expireRedeemAtUnix
      redeemImage
      redeemDescription
    }
    referrer
    receiver
    referrerPostUser {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    receiverPostUser {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    createdAt
  }
}
`;
export const onUpdatePostReferSecond = `subscription OnUpdatePostReferSecond {
  onUpdatePostReferSecond {
    id
    post {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      postImages {
        nextToken
      }
      postComments {
        nextToken
      }
      postOfUser {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      owner
      type
      createdAt
      refers {
        nextToken
      }
      postBookmarks {
        nextToken
      }
      reports {
        nextToken
      }
      postRadeem {
        nextToken
      }
      countComment
      countRefer
      countRadeem
      countBookmark
      countReport
      countConnect
      radeemQuota
      expireAtUnix
      expireAt
      expire
      pin
      createdAtUnix
      expireRedeemAt
      expireRedeemAtUnix
      redeemImage
      redeemDescription
    }
    referrer
    receiver
    referrerPostUser {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    receiverPostUser {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    createdAt
  }
}
`;
export const onDeletePostReferSecond = `subscription OnDeletePostReferSecond {
  onDeletePostReferSecond {
    id
    post {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      postImages {
        nextToken
      }
      postComments {
        nextToken
      }
      postOfUser {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      owner
      type
      createdAt
      refers {
        nextToken
      }
      postBookmarks {
        nextToken
      }
      reports {
        nextToken
      }
      postRadeem {
        nextToken
      }
      countComment
      countRefer
      countRadeem
      countBookmark
      countReport
      countConnect
      radeemQuota
      expireAtUnix
      expireAt
      expire
      pin
      createdAtUnix
      expireRedeemAt
      expireRedeemAtUnix
      redeemImage
      redeemDescription
    }
    referrer
    receiver
    referrerPostUser {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    receiverPostUser {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    createdAt
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
    image
    images {
      items {
        id
        uri
        createdAt
      }
      nextToken
    }
    quota
    eventJoineds {
      items {
        id
        eventId
        userId
        eventStartTimeUnix
        eventEndTime
        createdAt
      }
      nextToken
    }
    location {
      placeName
      placeLatLng
    }
    createdAt
    upcoming
    user {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
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
    image
    images {
      items {
        id
        uri
        createdAt
      }
      nextToken
    }
    quota
    eventJoineds {
      items {
        id
        eventId
        userId
        eventStartTimeUnix
        eventEndTime
        createdAt
      }
      nextToken
    }
    location {
      placeName
      placeLatLng
    }
    createdAt
    upcoming
    user {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
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
    image
    images {
      items {
        id
        uri
        createdAt
      }
      nextToken
    }
    quota
    eventJoineds {
      items {
        id
        eventId
        userId
        eventStartTimeUnix
        eventEndTime
        createdAt
      }
      nextToken
    }
    location {
      placeName
      placeLatLng
    }
    createdAt
    upcoming
    user {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
  }
}
`;
export const onCreateEventImage = `subscription OnCreateEventImage {
  onCreateEventImage {
    id
    uri
    event {
      id
      title
      startTime
      endTime
      description
      image
      images {
        nextToken
      }
      quota
      eventJoineds {
        nextToken
      }
      location {
        placeName
        placeLatLng
      }
      createdAt
      upcoming
      user {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
    }
    createdAt
  }
}
`;
export const onUpdateEventImage = `subscription OnUpdateEventImage {
  onUpdateEventImage {
    id
    uri
    event {
      id
      title
      startTime
      endTime
      description
      image
      images {
        nextToken
      }
      quota
      eventJoineds {
        nextToken
      }
      location {
        placeName
        placeLatLng
      }
      createdAt
      upcoming
      user {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
    }
    createdAt
  }
}
`;
export const onDeleteEventImage = `subscription OnDeleteEventImage {
  onDeleteEventImage {
    id
    uri
    event {
      id
      title
      startTime
      endTime
      description
      image
      images {
        nextToken
      }
      quota
      eventJoineds {
        nextToken
      }
      location {
        placeName
        placeLatLng
      }
      createdAt
      upcoming
      user {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
    }
    createdAt
  }
}
`;
export const onCreateReport = `subscription OnCreateReport {
  onCreateReport {
    id
    post {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      postImages {
        nextToken
      }
      postComments {
        nextToken
      }
      postOfUser {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      owner
      type
      createdAt
      refers {
        nextToken
      }
      postBookmarks {
        nextToken
      }
      reports {
        nextToken
      }
      postRadeem {
        nextToken
      }
      countComment
      countRefer
      countRadeem
      countBookmark
      countReport
      countConnect
      radeemQuota
      expireAtUnix
      expireAt
      expire
      pin
      createdAtUnix
      expireRedeemAt
      expireRedeemAtUnix
      redeemImage
      redeemDescription
    }
    reporter {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    type
    status
    description
    createdAt
  }
}
`;
export const onUpdateReport = `subscription OnUpdateReport {
  onUpdateReport {
    id
    post {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      postImages {
        nextToken
      }
      postComments {
        nextToken
      }
      postOfUser {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      owner
      type
      createdAt
      refers {
        nextToken
      }
      postBookmarks {
        nextToken
      }
      reports {
        nextToken
      }
      postRadeem {
        nextToken
      }
      countComment
      countRefer
      countRadeem
      countBookmark
      countReport
      countConnect
      radeemQuota
      expireAtUnix
      expireAt
      expire
      pin
      createdAtUnix
      expireRedeemAt
      expireRedeemAtUnix
      redeemImage
      redeemDescription
    }
    reporter {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    type
    status
    description
    createdAt
  }
}
`;
export const onDeleteReport = `subscription OnDeleteReport {
  onDeleteReport {
    id
    post {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      postImages {
        nextToken
      }
      postComments {
        nextToken
      }
      postOfUser {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      owner
      type
      createdAt
      refers {
        nextToken
      }
      postBookmarks {
        nextToken
      }
      reports {
        nextToken
      }
      postRadeem {
        nextToken
      }
      countComment
      countRefer
      countRadeem
      countBookmark
      countReport
      countConnect
      radeemQuota
      expireAtUnix
      expireAt
      expire
      pin
      createdAtUnix
      expireRedeemAt
      expireRedeemAtUnix
      redeemImage
      redeemDescription
    }
    reporter {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    type
    status
    description
    createdAt
  }
}
`;
export const onCreatePostBookmark = `subscription OnCreatePostBookmark {
  onCreatePostBookmark {
    id
    postBookmark {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      postImages {
        nextToken
      }
      postComments {
        nextToken
      }
      postOfUser {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      owner
      type
      createdAt
      refers {
        nextToken
      }
      postBookmarks {
        nextToken
      }
      reports {
        nextToken
      }
      postRadeem {
        nextToken
      }
      countComment
      countRefer
      countRadeem
      countBookmark
      countReport
      countConnect
      radeemQuota
      expireAtUnix
      expireAt
      expire
      pin
      createdAtUnix
      expireRedeemAt
      expireRedeemAtUnix
      redeemImage
      redeemDescription
    }
    userBookmark {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    userBookmarkCode
    createdAt
  }
}
`;
export const onUpdatePostBookmark = `subscription OnUpdatePostBookmark {
  onUpdatePostBookmark {
    id
    postBookmark {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      postImages {
        nextToken
      }
      postComments {
        nextToken
      }
      postOfUser {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      owner
      type
      createdAt
      refers {
        nextToken
      }
      postBookmarks {
        nextToken
      }
      reports {
        nextToken
      }
      postRadeem {
        nextToken
      }
      countComment
      countRefer
      countRadeem
      countBookmark
      countReport
      countConnect
      radeemQuota
      expireAtUnix
      expireAt
      expire
      pin
      createdAtUnix
      expireRedeemAt
      expireRedeemAtUnix
      redeemImage
      redeemDescription
    }
    userBookmark {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    userBookmarkCode
    createdAt
  }
}
`;
export const onDeletePostBookmark = `subscription OnDeletePostBookmark {
  onDeletePostBookmark {
    id
    postBookmark {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      postImages {
        nextToken
      }
      postComments {
        nextToken
      }
      postOfUser {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      owner
      type
      createdAt
      refers {
        nextToken
      }
      postBookmarks {
        nextToken
      }
      reports {
        nextToken
      }
      postRadeem {
        nextToken
      }
      countComment
      countRefer
      countRadeem
      countBookmark
      countReport
      countConnect
      radeemQuota
      expireAtUnix
      expireAt
      expire
      pin
      createdAtUnix
      expireRedeemAt
      expireRedeemAtUnix
      redeemImage
      redeemDescription
    }
    userBookmark {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    userBookmarkCode
    createdAt
  }
}
`;
export const onCreatePostRadeemSecond = `subscription OnCreatePostRadeemSecond {
  onCreatePostRadeemSecond {
    id
    postRadeem {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      postImages {
        nextToken
      }
      postComments {
        nextToken
      }
      postOfUser {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      owner
      type
      createdAt
      refers {
        nextToken
      }
      postBookmarks {
        nextToken
      }
      reports {
        nextToken
      }
      postRadeem {
        nextToken
      }
      countComment
      countRefer
      countRadeem
      countBookmark
      countReport
      countConnect
      radeemQuota
      expireAtUnix
      expireAt
      expire
      pin
      createdAtUnix
      expireRedeemAt
      expireRedeemAtUnix
      redeemImage
      redeemDescription
    }
    userRadeem {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    postId
    userId
    createdAt
  }
}
`;
export const onUpdatePostRadeemSecond = `subscription OnUpdatePostRadeemSecond {
  onUpdatePostRadeemSecond {
    id
    postRadeem {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      postImages {
        nextToken
      }
      postComments {
        nextToken
      }
      postOfUser {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      owner
      type
      createdAt
      refers {
        nextToken
      }
      postBookmarks {
        nextToken
      }
      reports {
        nextToken
      }
      postRadeem {
        nextToken
      }
      countComment
      countRefer
      countRadeem
      countBookmark
      countReport
      countConnect
      radeemQuota
      expireAtUnix
      expireAt
      expire
      pin
      createdAtUnix
      expireRedeemAt
      expireRedeemAtUnix
      redeemImage
      redeemDescription
    }
    userRadeem {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    postId
    userId
    createdAt
  }
}
`;
export const onDeletePostRadeemSecond = `subscription OnDeletePostRadeemSecond {
  onDeletePostRadeemSecond {
    id
    postRadeem {
      id
      content
      enableComment
      tags
      location {
        placeName
        placeLatLng
      }
      postImages {
        nextToken
      }
      postComments {
        nextToken
      }
      postOfUser {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      owner
      type
      createdAt
      refers {
        nextToken
      }
      postBookmarks {
        nextToken
      }
      reports {
        nextToken
      }
      postRadeem {
        nextToken
      }
      countComment
      countRefer
      countRadeem
      countBookmark
      countReport
      countConnect
      radeemQuota
      expireAtUnix
      expireAt
      expire
      pin
      createdAtUnix
      expireRedeemAt
      expireRedeemAtUnix
      redeemImage
      redeemDescription
    }
    userRadeem {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    postId
    userId
    createdAt
  }
}
`;
export const onCreateUserJoinedEvent = `subscription OnCreateUserJoinedEvent {
  onCreateUserJoinedEvent {
    id
    eventId
    userId
    userEvent {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    eventJoined {
      id
      title
      startTime
      endTime
      description
      image
      images {
        nextToken
      }
      quota
      eventJoineds {
        nextToken
      }
      location {
        placeName
        placeLatLng
      }
      createdAt
      upcoming
      user {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
    }
    eventStartTimeUnix
    eventEndTime
    createdAt
  }
}
`;
export const onUpdateUserJoinedEvent = `subscription OnUpdateUserJoinedEvent {
  onUpdateUserJoinedEvent {
    id
    eventId
    userId
    userEvent {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    eventJoined {
      id
      title
      startTime
      endTime
      description
      image
      images {
        nextToken
      }
      quota
      eventJoineds {
        nextToken
      }
      location {
        placeName
        placeLatLng
      }
      createdAt
      upcoming
      user {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
    }
    eventStartTimeUnix
    eventEndTime
    createdAt
  }
}
`;
export const onDeleteUserJoinedEvent = `subscription OnDeleteUserJoinedEvent {
  onDeleteUserJoinedEvent {
    id
    eventId
    userId
    userEvent {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    eventJoined {
      id
      title
      startTime
      endTime
      description
      image
      images {
        nextToken
      }
      quota
      eventJoineds {
        nextToken
      }
      location {
        placeName
        placeLatLng
      }
      createdAt
      upcoming
      user {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
    }
    eventStartTimeUnix
    eventEndTime
    createdAt
  }
}
`;
export const onCreateReportComment = `subscription OnCreateReportComment {
  onCreateReportComment {
    id
    commentId
    reporterId
    createdAtUnix
    comment {
      id
      content
      postId
      userId
      createdAtUnix
      postComment {
        id
        content
        enableComment
        tags
        owner
        type
        createdAt
        countComment
        countRefer
        countRadeem
        countBookmark
        countReport
        countConnect
        radeemQuota
        expireAtUnix
        expireAt
        expire
        pin
        createdAtUnix
        expireRedeemAt
        expireRedeemAtUnix
        redeemImage
        redeemDescription
      }
      userComment {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      reportComments {
        nextToken
      }
      createdAt
    }
    reporter {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    createdAt
  }
}
`;
export const onUpdateReportComment = `subscription OnUpdateReportComment {
  onUpdateReportComment {
    id
    commentId
    reporterId
    createdAtUnix
    comment {
      id
      content
      postId
      userId
      createdAtUnix
      postComment {
        id
        content
        enableComment
        tags
        owner
        type
        createdAt
        countComment
        countRefer
        countRadeem
        countBookmark
        countReport
        countConnect
        radeemQuota
        expireAtUnix
        expireAt
        expire
        pin
        createdAtUnix
        expireRedeemAt
        expireRedeemAtUnix
        redeemImage
        redeemDescription
      }
      userComment {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      reportComments {
        nextToken
      }
      createdAt
    }
    reporter {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    createdAt
  }
}
`;
export const onDeleteReportComment = `subscription OnDeleteReportComment {
  onDeleteReportComment {
    id
    commentId
    reporterId
    createdAtUnix
    comment {
      id
      content
      postId
      userId
      createdAtUnix
      postComment {
        id
        content
        enableComment
        tags
        owner
        type
        createdAt
        countComment
        countRefer
        countRadeem
        countBookmark
        countReport
        countConnect
        radeemQuota
        expireAtUnix
        expireAt
        expire
        pin
        createdAtUnix
        expireRedeemAt
        expireRedeemAtUnix
        redeemImage
        redeemDescription
      }
      userComment {
        id
        staffID
        username
        birthDate
        firstName
        lastName
        mobilePhone
        email
        amgId
        amgModel
        amgShowroom
        nickName
        citizenId
        image
        address
        subDistrict
        district
        province
        active
        pushToken
        type
        expireAt
        level
        createdAt
      }
      reportComments {
        nextToken
      }
      createdAt
    }
    reporter {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    createdAt
  }
}
`;
export const onCreateUserBlock = `subscription OnCreateUserBlock {
  onCreateUserBlock {
    id
    userId
    blockUserId
    blockUser {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    createdAtUnix
    createdAt
  }
}
`;
export const onUpdateUserBlock = `subscription OnUpdateUserBlock {
  onUpdateUserBlock {
    id
    userId
    blockUserId
    blockUser {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    createdAtUnix
    createdAt
  }
}
`;
export const onDeleteUserBlock = `subscription OnDeleteUserBlock {
  onDeleteUserBlock {
    id
    userId
    blockUserId
    blockUser {
      id
      staffID
      username
      birthDate
      firstName
      lastName
      mobilePhone
      email
      amgId
      amgModel
      amgShowroom
      nickName
      citizenId
      image
      address
      subDistrict
      district
      province
      active
      pushToken
      type
      expireAt
      level
      createdAt
      images {
        nextToken
      }
      companies {
        nextToken
      }
      postsOfUser {
        nextToken
      }
      userComments {
        nextToken
      }
      userReports {
        nextToken
      }
      userBookmarks {
        nextToken
      }
      referrers {
        nextToken
      }
      receivers {
        nextToken
      }
      userRadeem {
        nextToken
      }
      userEvents {
        nextToken
      }
      reportComments {
        nextToken
      }
      userBlocks {
        nextToken
      }
      events {
        nextToken
      }
    }
    createdAtUnix
    createdAt
  }
}
`;
export const onCreatePostConnect = `subscription OnCreatePostConnect {
  onCreatePostConnect {
    id
    userId
    connectUserId
    createdAtUnix
    postId
    createdAt
  }
}
`;
export const onUpdatePostConnect = `subscription OnUpdatePostConnect {
  onUpdatePostConnect {
    id
    userId
    connectUserId
    createdAtUnix
    postId
    createdAt
  }
}
`;
export const onDeletePostConnect = `subscription OnDeletePostConnect {
  onDeletePostConnect {
    id
    userId
    connectUserId
    createdAtUnix
    postId
    createdAt
  }
}
`;
export const onCreateFeedback = `subscription OnCreateFeedback {
  onCreateFeedback {
    id
    topic
    message
    createdAtUnix
    userId
    createdAt
  }
}
`;
export const onUpdateFeedback = `subscription OnUpdateFeedback {
  onUpdateFeedback {
    id
    topic
    message
    createdAtUnix
    userId
    createdAt
  }
}
`;
export const onDeleteFeedback = `subscription OnDeleteFeedback {
  onDeleteFeedback {
    id
    topic
    message
    createdAtUnix
    userId
    createdAt
  }
}
`;
