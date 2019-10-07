// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createUserImages = `mutation CreateUserImages($input: CreateUserImagesInput!) {
  createUserImages(input: $input) {
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
export const updateUserImages = `mutation UpdateUserImages($input: UpdateUserImagesInput!) {
  updateUserImages(input: $input) {
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
export const deleteUserImages = `mutation DeleteUserImages($input: DeleteUserImagesInput!) {
  deleteUserImages(input: $input) {
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
export const createCompany = `mutation CreateCompany($input: CreateCompanyInput!) {
  createCompany(input: $input) {
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
export const updateCompany = `mutation UpdateCompany($input: UpdateCompanyInput!) {
  updateCompany(input: $input) {
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
export const deleteCompany = `mutation DeleteCompany($input: DeleteCompanyInput!) {
  deleteCompany(input: $input) {
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
export const createCompanyImages = `mutation CreateCompanyImages($input: CreateCompanyImagesInput!) {
  createCompanyImages(input: $input) {
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
export const updateCompanyImages = `mutation UpdateCompanyImages($input: UpdateCompanyImagesInput!) {
  updateCompanyImages(input: $input) {
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
export const deleteCompanyImages = `mutation DeleteCompanyImages($input: DeleteCompanyImagesInput!) {
  deleteCompanyImages(input: $input) {
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
export const createPackage = `mutation CreatePackage($input: CreatePackageInput!) {
  createPackage(input: $input) {
    id
    title
    price
    description
    level
    createdAt
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
    createdAt
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
    createdAt
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
export const createPostImage = `mutation CreatePostImage($input: CreatePostImageInput!) {
  createPostImage(input: $input) {
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
export const updatePostImage = `mutation UpdatePostImage($input: UpdatePostImageInput!) {
  updatePostImage(input: $input) {
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
export const deletePostImage = `mutation DeletePostImage($input: DeletePostImageInput!) {
  deletePostImage(input: $input) {
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
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
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
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
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
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
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
export const createPostReferSecond = `mutation CreatePostReferSecond($input: CreatePostReferSecondInput!) {
  createPostReferSecond(input: $input) {
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
export const updatePostReferSecond = `mutation UpdatePostReferSecond($input: UpdatePostReferSecondInput!) {
  updatePostReferSecond(input: $input) {
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
export const deletePostReferSecond = `mutation DeletePostReferSecond($input: DeletePostReferSecondInput!) {
  deletePostReferSecond(input: $input) {
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
export const createEvent = `mutation CreateEvent($input: CreateEventInput!) {
  createEvent(input: $input) {
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
export const updateEvent = `mutation UpdateEvent($input: UpdateEventInput!) {
  updateEvent(input: $input) {
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
export const deleteEvent = `mutation DeleteEvent($input: DeleteEventInput!) {
  deleteEvent(input: $input) {
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
export const createEventImage = `mutation CreateEventImage($input: CreateEventImageInput!) {
  createEventImage(input: $input) {
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
export const updateEventImage = `mutation UpdateEventImage($input: UpdateEventImageInput!) {
  updateEventImage(input: $input) {
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
export const deleteEventImage = `mutation DeleteEventImage($input: DeleteEventImageInput!) {
  deleteEventImage(input: $input) {
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
export const createReport = `mutation CreateReport($input: CreateReportInput!) {
  createReport(input: $input) {
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
export const updateReport = `mutation UpdateReport($input: UpdateReportInput!) {
  updateReport(input: $input) {
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
export const deleteReport = `mutation DeleteReport($input: DeleteReportInput!) {
  deleteReport(input: $input) {
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
export const createPostBookmark = `mutation CreatePostBookmark($input: CreatePostBookmarkInput!) {
  createPostBookmark(input: $input) {
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
export const updatePostBookmark = `mutation UpdatePostBookmark($input: UpdatePostBookmarkInput!) {
  updatePostBookmark(input: $input) {
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
export const deletePostBookmark = `mutation DeletePostBookmark($input: DeletePostBookmarkInput!) {
  deletePostBookmark(input: $input) {
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
export const createPostRadeemSecond = `mutation CreatePostRadeemSecond($input: CreatePostRadeemSecondInput!) {
  createPostRadeemSecond(input: $input) {
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
export const updatePostRadeemSecond = `mutation UpdatePostRadeemSecond($input: UpdatePostRadeemSecondInput!) {
  updatePostRadeemSecond(input: $input) {
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
export const deletePostRadeemSecond = `mutation DeletePostRadeemSecond($input: DeletePostRadeemSecondInput!) {
  deletePostRadeemSecond(input: $input) {
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
export const createUserJoinedEvent = `mutation CreateUserJoinedEvent($input: CreateUserJoinedEventInput!) {
  createUserJoinedEvent(input: $input) {
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
export const updateUserJoinedEvent = `mutation UpdateUserJoinedEvent($input: UpdateUserJoinedEventInput!) {
  updateUserJoinedEvent(input: $input) {
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
export const deleteUserJoinedEvent = `mutation DeleteUserJoinedEvent($input: DeleteUserJoinedEventInput!) {
  deleteUserJoinedEvent(input: $input) {
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
export const createReportComment = `mutation CreateReportComment($input: CreateReportCommentInput!) {
  createReportComment(input: $input) {
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
export const updateReportComment = `mutation UpdateReportComment($input: UpdateReportCommentInput!) {
  updateReportComment(input: $input) {
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
export const deleteReportComment = `mutation DeleteReportComment($input: DeleteReportCommentInput!) {
  deleteReportComment(input: $input) {
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
export const createUserBlock = `mutation CreateUserBlock($input: CreateUserBlockInput!) {
  createUserBlock(input: $input) {
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
export const updateUserBlock = `mutation UpdateUserBlock($input: UpdateUserBlockInput!) {
  updateUserBlock(input: $input) {
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
export const deleteUserBlock = `mutation DeleteUserBlock($input: DeleteUserBlockInput!) {
  deleteUserBlock(input: $input) {
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
export const createPostConnect = `mutation CreatePostConnect($input: CreatePostConnectInput!) {
  createPostConnect(input: $input) {
    id
    userId
    connectUserId
    createdAtUnix
    postId
    createdAt
  }
}
`;
export const updatePostConnect = `mutation UpdatePostConnect($input: UpdatePostConnectInput!) {
  updatePostConnect(input: $input) {
    id
    userId
    connectUserId
    createdAtUnix
    postId
    createdAt
  }
}
`;
export const deletePostConnect = `mutation DeletePostConnect($input: DeletePostConnectInput!) {
  deletePostConnect(input: $input) {
    id
    userId
    connectUserId
    createdAtUnix
    postId
    createdAt
  }
}
`;
export const createFeedback = `mutation CreateFeedback($input: CreateFeedbackInput!) {
  createFeedback(input: $input) {
    id
    topic
    message
    createdAtUnix
    userId
    createdAt
  }
}
`;
export const updateFeedback = `mutation UpdateFeedback($input: UpdateFeedbackInput!) {
  updateFeedback(input: $input) {
    id
    topic
    message
    createdAtUnix
    userId
    createdAt
  }
}
`;
export const deleteFeedback = `mutation DeleteFeedback($input: DeleteFeedbackInput!) {
  deleteFeedback(input: $input) {
    id
    topic
    message
    createdAtUnix
    userId
    createdAt
  }
}
`;
