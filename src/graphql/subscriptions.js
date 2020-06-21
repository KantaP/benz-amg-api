/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser($username: String) {
  onCreateUser(username: $username) {
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
        owner
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
        active
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
        owner
      }
      nextToken
    }
    receivers {
      items {
        id
        referrer
        receiver
        createdAt
        owner
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
        hashStatus
      }
      nextToken
    }
    feedbacks {
      items {
        id
        topic
        message
        createdAtUnix
        createdAt
      }
      nextToken
    }
    memberShipPrice
    firstLogin
    memberExpiredAt
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser($username: String) {
  onUpdateUser(username: $username) {
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
        owner
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
        active
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
        owner
      }
      nextToken
    }
    receivers {
      items {
        id
        referrer
        receiver
        createdAt
        owner
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
        hashStatus
      }
      nextToken
    }
    feedbacks {
      items {
        id
        topic
        message
        createdAtUnix
        createdAt
      }
      nextToken
    }
    memberShipPrice
    firstLogin
    memberExpiredAt
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
        owner
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
        active
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
        owner
      }
      nextToken
    }
    receivers {
      items {
        id
        referrer
        receiver
        createdAt
        owner
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
        hashStatus
      }
      nextToken
    }
    feedbacks {
      items {
        id
        topic
        message
        createdAtUnix
        createdAt
      }
      nextToken
    }
    memberShipPrice
    firstLogin
    memberExpiredAt
  }
}
`;
export const onCreateUserImages = `subscription OnCreateUserImages($owner: String) {
  onCreateUserImages(owner: $owner) {
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
    }
  }
}
`;
export const onUpdateUserImages = `subscription OnUpdateUserImages($owner: String) {
  onUpdateUserImages(owner: $owner) {
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
    }
  }
}
`;
export const onDeleteUserImages = `subscription OnDeleteUserImages($owner: String) {
  onDeleteUserImages(owner: $owner) {
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
    }
  }
}
`;
export const onCreateCompany = `subscription OnCreateCompany($owner: String) {
  onCreateCompany(owner: $owner) {
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
    owner
  }
}
`;
export const onUpdateCompany = `subscription OnUpdateCompany($owner: String) {
  onUpdateCompany(owner: $owner) {
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
    owner
  }
}
`;
export const onDeleteCompany = `subscription OnDeleteCompany($owner: String) {
  onDeleteCompany(owner: $owner) {
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
    owner
  }
}
`;
export const onCreateCompanyImages = `subscription OnCreateCompanyImages($owner: String) {
  onCreateCompanyImages(owner: $owner) {
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      owner
    }
  }
}
`;
export const onUpdateCompanyImages = `subscription OnUpdateCompanyImages($owner: String) {
  onUpdateCompanyImages(owner: $owner) {
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      owner
    }
  }
}
`;
export const onDeleteCompanyImages = `subscription OnDeleteCompanyImages($owner: String) {
  onDeleteCompanyImages(owner: $owner) {
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      owner
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
export const onCreatePost = `subscription OnCreatePost($owner: String) {
  onCreatePost(owner: $owner) {
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
        owner
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
        owner
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
    active
  }
}
`;
export const onUpdatePost = `subscription OnUpdatePost($owner: String) {
  onUpdatePost(owner: $owner) {
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
        owner
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
        owner
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
    active
  }
}
`;
export const onDeletePost = `subscription OnDeletePost($owner: String) {
  onDeletePost(owner: $owner) {
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
        owner
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
        owner
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
    active
  }
}
`;
export const onCreatePostImage = `subscription OnCreatePostImage($owner: String) {
  onCreatePostImage(owner: $owner) {
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      active
    }
    createdAt
    owner
  }
}
`;
export const onUpdatePostImage = `subscription OnUpdatePostImage($owner: String) {
  onUpdatePostImage(owner: $owner) {
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      active
    }
    createdAt
    owner
  }
}
`;
export const onDeletePostImage = `subscription OnDeletePostImage($owner: String) {
  onDeletePostImage(owner: $owner) {
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      active
    }
    createdAt
    owner
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      active
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      active
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      active
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
export const onCreatePostReferSecond = `subscription OnCreatePostReferSecond($owner: String) {
  onCreatePostReferSecond(owner: $owner) {
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      active
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
    }
    createdAt
    owner
  }
}
`;
export const onUpdatePostReferSecond = `subscription OnUpdatePostReferSecond($owner: String) {
  onUpdatePostReferSecond(owner: $owner) {
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      active
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
    }
    createdAt
    owner
  }
}
`;
export const onDeletePostReferSecond = `subscription OnDeletePostReferSecond($owner: String) {
  onDeletePostReferSecond(owner: $owner) {
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      active
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
    }
    createdAt
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
    hashStatus
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
    hashStatus
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
    hashStatus
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
      hashStatus
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      hashStatus
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      hashStatus
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      active
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      active
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      active
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      active
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      active
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      active
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      active
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      active
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      active
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
      hashStatus
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
      hashStatus
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
      hashStatus
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
        active
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
        active
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
        active
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
        memberShipPrice
        firstLogin
        memberExpiredAt
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
    }
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
    }
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
      feedbacks {
        nextToken
      }
      memberShipPrice
      firstLogin
      memberExpiredAt
    }
    createdAt
  }
}
`;
