/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getUserImages = `query GetUserImages($id: ID!) {
  getUserImages(id: $id) {
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
export const listUserImagess = `query ListUserImagess(
  $filter: ModelUserImagesFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserImagess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        memberShipPrice
        firstLogin
        memberExpiredAt
      }
    }
    nextToken
  }
}
`;
export const getCompany = `query GetCompany($id: ID!) {
  getCompany(id: $id) {
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
export const listCompanys = `query ListCompanys(
  $filter: ModelCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getCompanyImages = `query GetCompanyImages($id: ID!) {
  getCompanyImages(id: $id) {
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
export const listCompanyImagess = `query ListCompanyImagess(
  $filter: ModelCompanyImagesFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanyImagess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      uri
      owner
      createdAt
      company {
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
    createdAt
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
      createdAt
    }
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
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
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPostImage = `query GetPostImage($id: ID!) {
  getPostImage(id: $id) {
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
export const listPostImages = `query ListPostImages(
  $filter: ModelPostImageFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      uri
      postImage {
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
      createdAt
      owner
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
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
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPostReferSecond = `query GetPostReferSecond($id: ID!) {
  getPostReferSecond(id: $id) {
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
export const listPostReferSeconds = `query ListPostReferSeconds(
  $filter: ModelPostReferSecondFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostReferSeconds(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      post {
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
        memberShipPrice
        firstLogin
        memberExpiredAt
      }
      createdAt
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
    nextToken
  }
}
`;
export const getEventImage = `query GetEventImage($id: ID!) {
  getEventImage(id: $id) {
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
export const listEventImages = `query ListEventImages(
  $filter: ModelEventImageFilterInput
  $limit: Int
  $nextToken: String
) {
  listEventImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      uri
      event {
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
      createdAt
    }
    nextToken
  }
}
`;
export const getReport = `query GetReport($id: ID!) {
  getReport(id: $id) {
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
export const listReports = `query ListReports(
  $filter: ModelReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      post {
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
        memberShipPrice
        firstLogin
        memberExpiredAt
      }
      type
      status
      description
      createdAt
    }
    nextToken
  }
}
`;
export const getPostBookmark = `query GetPostBookmark($id: ID!, $userBookmarkCode: String!) {
  getPostBookmark(id: $id, userBookmarkCode: $userBookmarkCode) {
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
export const listPostBookmarks = `query ListPostBookmarks(
  $id: ID
  $userBookmarkCode: ModelStringKeyConditionInput
  $filter: ModelPostBookmarkFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPostBookmarks(
    id: $id
    userBookmarkCode: $userBookmarkCode
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      postBookmark {
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
        memberShipPrice
        firstLogin
        memberExpiredAt
      }
      userBookmarkCode
      createdAt
    }
    nextToken
  }
}
`;
export const getPostRadeemSecond = `query GetPostRadeemSecond($id: ID!, $postId: String!) {
  getPostRadeemSecond(id: $id, postId: $postId) {
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
export const listPostRadeemSeconds = `query ListPostRadeemSeconds(
  $id: ID
  $postId: ModelStringKeyConditionInput
  $filter: ModelPostRadeemSecondFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPostRadeemSeconds(
    id: $id
    postId: $postId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      postRadeem {
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
        memberShipPrice
        firstLogin
        memberExpiredAt
      }
      postId
      userId
      createdAt
    }
    nextToken
  }
}
`;
export const getUserJoinedEvent = `query GetUserJoinedEvent($id: ID!, $eventId: String!) {
  getUserJoinedEvent(id: $id, eventId: $eventId) {
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
export const listUserJoinedEvents = `query ListUserJoinedEvents(
  $id: ID
  $eventId: ModelStringKeyConditionInput
  $filter: ModelUserJoinedEventFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUserJoinedEvents(
    id: $id
    eventId: $eventId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
        quota
        createdAt
        upcoming
        hashStatus
      }
      eventStartTimeUnix
      eventEndTime
      createdAt
    }
    nextToken
  }
}
`;
export const getReportComment = `query GetReportComment($id: ID!) {
  getReportComment(id: $id) {
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
export const listReportComments = `query ListReportComments(
  $filter: ModelReportCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listReportComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        memberShipPrice
        firstLogin
        memberExpiredAt
      }
      createdAt
    }
    nextToken
  }
}
`;
export const getUserBlock = `query GetUserBlock($id: ID!) {
  getUserBlock(id: $id) {
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
export const listUserBlocks = `query ListUserBlocks(
  $filter: ModelUserBlockFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserBlocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        memberShipPrice
        firstLogin
        memberExpiredAt
      }
      createdAtUnix
      createdAt
    }
    nextToken
  }
}
`;
export const getPostConnect = `query GetPostConnect($id: ID!) {
  getPostConnect(id: $id) {
    id
    userId
    connectUserId
    createdAtUnix
    postId
    createdAt
  }
}
`;
export const listPostConnects = `query ListPostConnects(
  $filter: ModelPostConnectFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostConnects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      connectUserId
      createdAtUnix
      postId
      createdAt
    }
    nextToken
  }
}
`;
export const getFeedback = `query GetFeedback($id: ID!) {
  getFeedback(id: $id) {
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
export const listFeedbacks = `query ListFeedbacks(
  $filter: ModelFeedbackFilterInput
  $limit: Int
  $nextToken: String
) {
  listFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        memberShipPrice
        firstLogin
        memberExpiredAt
      }
      createdAt
    }
    nextToken
  }
}
`;
export const itemsByPostType = `query ItemsByPostType(
  $type: String
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  itemsByPostType(
    type: $type
    createdAt: $createdAt
    sortDirection: $sortDirection
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
    nextToken
  }
}
`;
export const itemsByPin = `query ItemsByPin(
  $pin: String
  $expireAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  itemsByPin(
    pin: $pin
    expireAt: $expireAt
    sortDirection: $sortDirection
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
    nextToken
  }
}
`;
export const itemsByPinCreated = `query ItemsByPinCreated(
  $pin: String
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  itemsByPinCreated(
    pin: $pin
    createdAt: $createdAt
    sortDirection: $sortDirection
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
    nextToken
  }
}
`;
export const postsByActive = `query PostsByActive(
  $active: String
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsByActive(
    active: $active
    createdAt: $createdAt
    sortDirection: $sortDirection
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
    nextToken
  }
}
`;
export const eventsSortByStartTime = `query EventsSortByStartTime(
  $hashStatus: String
  $startTime: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  eventsSortByStartTime(
    hashStatus: $hashStatus
    startTime: $startTime
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const redeemByPost = `query RedeemByPost(
  $postId: String
  $userId: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPostRadeemSecondFilterInput
  $limit: Int
  $nextToken: String
) {
  redeemByPost(
    postId: $postId
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      postRadeem {
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
        memberShipPrice
        firstLogin
        memberExpiredAt
      }
      postId
      userId
      createdAt
    }
    nextToken
  }
}
`;
export const searchEvents = `query SearchEvents(
  $filter: SearchableEventFilterInput
  $sort: SearchableEventSortInput
  $limit: Int
  $nextToken: String
) {
  searchEvents(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
