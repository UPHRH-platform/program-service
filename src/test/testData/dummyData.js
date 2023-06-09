exports.programUpdate = {
  program_id: "",
  description: "description update by testCases",
  rolemapping: { REVIEWER: ["f7dab7bc-b9ea-457a-b4d9-7633fbd9736c"] },
};

exports.mandatoryFieldsProgramCreate = ["config", "type"]; // ['config', 'type', 'status', 'createdby']
exports.mandatoryFieldsProgramUpdate = ["program_id"]; // ['program_id', 'status', 'updatedby']

exports.nominationAdd = {
  program_id: "",
  user_id: "f7dab7bc-b9ea-457a-b4d9-7633fbd9736c",
  status: "Initiated",
  content_types: ["PracticeQuestionSet"],
  organisation_id: "4fe5d899-dc3e-48de-b0b6-891e0922d371",
  createdby: "f7dab7bc-b9ea-457a-b4d9-7633fbd9736c",
};

exports.nominationUpdate = {
  program_id: "",
  user_id: "f7dab7bc-b9ea-457a-b4d9-7633fbd9736c",
  status: "Pending",
  content_types: ["PracticeQuestionSet"],
  updatedby: "6e1cef48-aa38-4d53-9f3a-4f73dafd4d88",
  collection_ids: ["do_11305198433242316813067"],
};

exports.mandatoryFieldsNominationAdd = ["program_id", "user_id", "status"]; // ['program_id', 'user_id', 'status', 'createdby']
exports.mandatoryFieldsNominationUpdate = ["program_id", "user_id"]; // ['program_id', 'user_id', 'status', 'updatedby']

exports.preferenceAdd = {
  preference: { medium: ["English"], subject: ["English"] },
  program_id: "",
  type: "sourcing",
  user_id: "cca53828-8111-4d71-9c45-40e569f13bad",
};

exports.preferenceRead = {
  program_id: "",
  user_id: "cca53828-8111-4d71-9c45-40e569f13bad",
};

exports.regOrgSearch = {
  id: "open-saber.registry.search",
  ver: "1.0",
  ets: "11234",
  params: {
    did: "",
    key: "",
    msgid: "",
  },
  request: {
    entityType: ["Org"],
    filters: {
      osid: {
        or: ["4fe5d899-dc3e-48de-b0b6-891e0922d371"],
      },
    },
  },
};

exports.regUserSearch = {
  id: "open-saber.registry.search",
  ver: "1.0",
  ets: "11234",
  params: {
    did: "",
    key: "",
    msgid: "",
  },
  request: {
    entityType: ["User"],
    filters: {
      userId: {
        or: ["f7dab7bc-b9ea-457a-b4d9-7633fbd9736c"],
      },
    },
  },
};

exports.getCollectionWithProgramId = {
  request: {
    filters: {
      programId: "",
      objectType: "content",
      status: ["Draft"],
      contentType: "Textbook",
    },
    fields: [
      "name",
      "medium",
      "gradeLevel",
      "subject",
      "chapterCount",
      "acceptedContents",
      "rejectedContents",
      "openForContribution",
      "chapterCountForContribution",
      "mvcContributions",
    ],
    limit: 1000,
  },
};

exports.resultsGetCollectionWithProgramId = {
  result: {
    content: [
      {
        acceptedContents: [
          "do_11306389208843059216360",
          "do_11306389247965593616362",
          "do_11306390239684198416364",
        ],
        chapterCount: 2,
        identifier: "do_11306389164045926416355",
        medium: "Hindi",
        name: "DP-30",
        objectType: "Content",
        rejectedContents: [
          "do_11306389286445875216363",
          "do_11306390274224947216366",
        ],
        subject: "Hindi",
        openForContribution: true,
        mvcContributions: ["do_123"],
      },
    ],
    count: 1,
  },
};

exports.getSampleContentWithOrgId = {
  request: {
    filters: {
      programId: "",
      objectType: "content",
      status: ["Review", "Draft"],
      sampleContent: true,
    },
    aggregations: [
      {
        l1: "collectionId",
        l2: "organisationId",
      },
    ],
    limit: 0,
  },
};

exports.resultsGetSampleContentWithOrgId = {
  result: {
    count: 3,
    aggregations: [
      {
        values: [
          {
            count: 3,
            name: "do_11306389164045926416355",
            aggregations: [
              {
                values: [
                  {
                    count: 2,
                    name: "4fe5d899-dc3e-48de-b0b6-891e0922d371",
                  },
                ],
                name: "organisationId",
              },
            ],
          },
        ],
        name: "collectionId",
      },
    ],
  },
};

exports.getSampleContentWithCreatedBy = {
  request: {
    filters: {
      programId: "",
      objectType: "content",
      status: ["Review", "Draft"],
      sampleContent: true,
    },
    aggregations: [
      {
        l1: "collectionId",
        l2: "createdBy",
      },
    ],
    limit: 0,
  },
};

exports.resultsGetSampleContentWithCreatedBy = {
  result: {
    count: 3,
    aggregations: [
      {
        values: [
          {
            count: 3,
            name: "do_11306389164045926416355",
            aggregations: [
              {
                values: [
                  {
                    count: 1,
                    name: "f7dab7bc-b9ea-457a-b4d9-7633fbd9736c", // same as nominationAdd user_id
                  },
                  {
                    count: 1,
                    name: "g7dab7bc-b9ea-457a-b4d9-7633fbd9736c",
                  },
                  {
                    count: 1,
                    name: "h7dab7bc-b9ea-457a-b4d9-7633fbd9736c",
                  },
                ],
                name: "createdBy",
              },
            ],
          },
        ],
        name: "collectionId",
      },
    ],
  },
};

exports.resultsGetSampleContentWithOrgId_01 = {
  result: {
    count: 3,
    aggregations: [
      {
        values: [
          {
            count: 3,
            name: "do_11306389164045926416355",
            aggregations: [
              {
                values: [
                  {
                    count: 2,
                    name: "5fe5d899-dc3e-48de-b0b6-891e0922d371", // wrongly modified for test data
                  },
                ],
                name: "organisationId",
              },
            ],
          },
        ],
        name: "collectionId",
      },
    ],
  },
};

exports.getContributionWithProgramId = {
  request: {
    filters: {
      programId: "",
      objectType: "content",
      status: ["Review", "Draft", "Live"],
      contentType: { "!=": "Asset" },
      mimeType: { "!=": "application/vnd.ekstep.content-collection" },
    },
    not_exists: ["sampleContent"],
    aggregations: [
      {
        l1: "collectionId",
        l2: "status",
        l3: "prevStatus",
      },
    ],
    limit: 0,
  },
};

exports.resultGetContributionWithProgramId = {
  result: {
    aggregations: [
      {
        name: "collectionId",
        values: [
          {
            aggregations: [
              {
                name: "status",
                values: [
                  {
                    count: 5,
                    name: "live",
                    aggregations: [
                      {
                        values: [
                          {
                            count: 1,
                            name: "live",
                          },
                          {
                            count: 1,
                            name: "review",
                          },
                        ],
                        name: "prevStatus",
                      },
                    ],
                  },
                  {
                    count: 3,
                    name: "draft",
                    aggregations: [
                      {
                        values: [
                          {
                            count: 1,
                            name: "live",
                          },
                          {
                            count: 1,
                            name: "review",
                          },
                        ],
                        name: "prevStatus",
                      },
                    ],
                  },
                ],
              },
            ],
            count: 8,
            name: "do_11306389164045926416355",
          },
        ],
      },
    ],
    count: 0,
  },
};

exports.searchSampleContents = {
  request: {
    filters: {
      objectType: "content",
      programId: "",
      mimeType: { "!=": "application/vnd.ekstep.content-collection" },
      contentType: { "!=": "Asset" },
      sampleContent: true,
      status: ["Draft", "Review"],
    },
    fields: [
      "name",
      "identifier",
      "programId",
      "mimeType",
      "status",
      "sampleContent",
      "createdBy",
      "organisationId",
      "collectionId",
      "prevStatus",
      "contentType",
    ],
    limit: 10000,
  },
};

exports.resultSearchSampleContents = {
  responseCode: "OK",
  result: {
    count: 2,
    content: [
      {
        identifier: "do_11306546343774617618150",
        createdBy: "4fe5d899-dc3e-48de-b0b6-891e0922d371",
        prevStatus: "Draft",
        name: "Sample01",
        mimeType: "video/mp4",
        contentType: "LearningActivity",
        sampleContent: true,
        collectionId: "do_1130610285558169601677",
        programId: "",
        objectType: "Content",
        status: "Review",
      },
      {
        identifier: "do_11306596636010905618170",
        createdBy: "4fe5d899-dc3e-48de-b0b6-891e0922d371",
        name: "Untitled",
        mimeType: "application/pdf",
        contentType: "PedagogyFlow",
        sampleContent: true,
        collectionId: "do_1130610285558169601677",
        programId: "",
        objectType: "Content",
        status: "Draft",
      },
    ],
  },
};

exports.programRestrictedContrib = {"request":{"name":"program contribution restricted to selected org","description":"program contribution restricted to selected org","nomination_enddate":null,"shortlisting_enddate":null,"content_submission_enddate":"2021-08-26T18:29:59.000Z","rewards":null,"target_collection_category":["Content Playlist"],"content_types":[],"targetprimarycategories":[{"identifier":"obj-cat:demo-practice-question-set_questionset_all","name":"Demo Practice Question Set","targetObjectType":"QuestionSet"}],"sourcing_org_name":"Vidya2","rootorg_id":"012983850117177344161","createdby":"cca53828-8111-4d71-9c45-40e569f13bad","createdon":"2021-08-19T10:48:32.656Z","startdate":"2021-08-19T10:48:32.656Z","slug":"sunbird","type":"restricted","default_roles":["CONTRIBUTOR"],"enddate":"2021-09-02T18:29:59.000Z","status":"Live","program_id":"6e9bf2e0-00d9-11ec-bc85-5d4e626f801d","collection_ids":[null],"config":{"defaultContributeOrgReview":true,"_comments":"","loginReqired":true,"framework":["ekstep_ncert_k-12"],"board":[],"gradeLevel":[],"medium":[null],"subject":[null],"roles":[{"id":1,"name":"CONTRIBUTOR","default":true,"defaultTab":1,"tabs":[1]},{"id":2,"name":"REVIEWER","defaultTab":2,"tabs":[2]}],"header":{"id":"ng.sunbird.header","ver":"1.0","compId":"headerComp","author":"Venkat","description":"","publishedDate":"","data":{},"config":{"tabs":[{"index":1,"label":"Contribute","onClick":"collectionComponent"},{"index":2,"label":"Review","onClick":"collectionComponent"},{"index":3,"label":"Dashboard","onClick":"dashboardComponent"}]}},"components":[{"id":"ng.sunbird.collection","ver":"1.0","compId":"collectionComponent","author":"Venkat","description":"","publishedDate":"","data":{},"config":{"filters":{"implicit":[{"code":"framework","defaultValue":"ekstep_ncert_k-12","label":"Framework"},{"code":"board","defaultValue":"CBSE","label":"Board"},{"code":"medium","defaultValue":["English"],"label":"Medium"}],"explicit":[{"code":"gradeLevel","range":["Kindergarten","Grade 1","Grade 2","Grade 3"],"label":"Class","multiselect":false,"defaultValue":["Kindergarten","Grade 1"],"visibility":true},{"code":"subject","range":["English","Mathematics","Hindi"],"label":"Subject","multiselect":false,"defaultValue":["English"],"visibility":true}]},"groupBy":{"value":"subject","defaultValue":"subject"},"collectionType":"Textbook","collectionList":[],"status":["Draft","Live"]}},{"id":"ng.sunbird.chapterList","ver":"1.0","compId":"chapterListComponent","author":"Kartheek","description":"","publishedDate":"","data":{},"config":{"contentTypes":{"value":[{"id":"explanationContent","label":"Explanation","onClick":"uploadComponent","mimeType":["application/pdf","video/mp4","video/webm","application/epub"],"metadata":{"name":"Explanation Resource","description":"ExplanationResource","resourceType":"Read","contentType":"ExplanationResource","audience":["Learner"],"appIcon":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21291553051403878414/artifact/explanation.thumb_1576602846206.png","marks":5},"filesConfig":{"accepted":"pdf, mp4, webm, epub","size":"50"}},{"id":"learningActivity","label":"Activity for Learning","onClick":"uploadComponent","mimeType":["application/pdf","video/mp4","video/webm","application/epub","application/vnd.ekstep.h5p-archive"],"metadata":{"name":"Activity for Learning","description":"LearningActivity","resourceType":"Read","contentType":"LearningActivity","audience":["Learner"],"appIcon":"","marks":5},"filesConfig":{"accepted":"pdf, mp4, webm, epub, h5p","size":"50"}},{"id":"experientialContent","label":"Experiential","onClick":"uploadComponent","mimeType":["video/mp4","video/webm"],"metadata":{"name":"Experiential Resource","description":"ExperientialResource","resourceType":"Read","contentType":"ExperientialResource","audience":["Learner"],"appIcon":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21291553051403878414/artifact/explanation.thumb_1576602846206.png","marks":5},"filesConfig":{"accepted":"mp4, webm","size":"50"}},{"id":"classroomTeachingVideo","label":"Classroom Teaching Video","onClick":"uploadComponent","mimeType":["video/mp4","video/webm"],"metadata":{"name":"Classroom Teaching Video","description":"ClassroomTeachingVideo","resourceType":"Read","contentType":"ClassroomTeachingVideo","audience":["Learner"],"appIcon":"","marks":5},"filesConfig":{"accepted":"mp4, webm","size":"50"}},{"id":"explanationVideo","label":"Explanation Video","onClick":"uploadComponent","mimeType":["video/mp4","video/webm"],"metadata":{"name":"Explanation Video","description":"ExplanationVideo","resourceType":"Read","contentType":"ExplanationVideo","audience":["Learner"],"appIcon":"","marks":5},"filesConfig":{"accepted":"mp4, webm","size":"50"}},{"id":"explanationReadingMaterial","label":"Explanation Reading Material","onClick":"uploadComponent","mimeType":["application/pdf","application/epub"],"metadata":{"name":"Explanation Reading Material","description":"ExplanationReadingMaterial","resourceType":"Read","contentType":"ExplanationReadingMaterial","audience":["Learner"],"appIcon":"","marks":5},"filesConfig":{"accepted":"pdf, epub","size":"50"}},{"id":"previousBoardExamPapers","label":"Previous Board Exam Papers","onClick":"uploadComponent","mimeType":["application/pdf","application/epub"],"metadata":{"name":"Previous Board Exam Papers","description":"PreviousBoardExamPapers","resourceType":"Read","contentType":"PreviousBoardExamPapers","audience":["Learner"],"appIcon":"","marks":5},"filesConfig":{"accepted":"pdf, epub","size":"50"}},{"id":"lessonPlanResource","label":"Lesson Plan","onClick":"uploadComponent","mimeType":["application/pdf","application/epub"],"metadata":{"name":"Lesson Plan","description":"LessonPlanResource","resourceType":"Read","contentType":"LessonPlanResource","audience":["Learner"],"appIcon":"","marks":5},"filesConfig":{"accepted":"pdf, epub","size":"50"}},{"id":"focusSpotContent","label":"FocusSpot","onClick":"uploadComponent","mimeType":["application/pdf","application/epub"],"metadata":{"name":"FocusSpot Resource","description":"FocusSpot","resourceType":"Read","contentType":"FocusSpot","audience":["Learner"],"appIcon":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21291553100098764812/artifact/focus-spot_1561727473311.thumb_1576602905573.png","marks":5},"filesConfig":{"accepted":"pdf, epub","size":"50"}},{"id":"TeachingMethod","label":"Teaching Method","onClick":"uploadComponent","mimeType":["application/pdf","application/epub"],"metadata":{"name":"Teaching Method","description":"TeachingMethod","resourceType":"Read","contentType":"TeachingMethod","audience":["Learner"],"appIcon":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21291553100098764812/artifact/focus-spot_1561727473311.thumb_1576602905573.png","marks":5},"filesConfig":{"accepted":"pdf, epub","size":"50"}},{"id":"PedagogyFlow","label":"Pedagogy Flow","onClick":"uploadComponent","mimeType":["application/pdf","application/epub"],"metadata":{"name":"Pedagogy Flow","description":"PedagogyFlow","resourceType":"Read","contentType":"PedagogyFlow","audience":["Learner"],"appIcon":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21291553100098764812/artifact/focus-spot_1561727473311.thumb_1576602905573.png","marks":5},"filesConfig":{"accepted":"pdf, epub","size":"50"}},{"id":"LearningOutcomeDefinition","label":"Learning Outcome Definition","onClick":"uploadComponent","mimeType":["application/pdf","application/epub"],"metadata":{"name":"Learning Outcome Definition","description":"LearningOutcomeDefinition","resourceType":"Read","contentType":"LearningOutcomeDefinition","audience":["Learner"],"appIcon":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21291553100098764812/artifact/focus-spot_1561727473311.thumb_1576602905573.png","marks":5},"filesConfig":{"accepted":"pdf, epub","size":"50"}},{"id":"MarkingSchemeRubric","label":"Marking Scheme Rubric","onClick":"uploadComponent","mimeType":["application/pdf","application/epub"],"metadata":{"name":"Marking Scheme Rubric","description":"MarkingSchemeRubric","resourceType":"Read","contentType":"MarkingSchemeRubric","audience":["Learner"],"appIcon":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21291553100098764812/artifact/focus-spot_1561727473311.thumb_1576602905573.png","marks":5},"filesConfig":{"accepted":"pdf, epub","size":"50"}},{"id":"ConceptMap","label":"Concept Map","onClick":"uploadComponent","mimeType":["application/pdf","application/epub"],"metadata":{"name":"Concept Map","description":"ConceptMap","resourceType":"Read","contentType":"ConceptMap","audience":["Learner"],"appIcon":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21291553100098764812/artifact/focus-spot_1561727473311.thumb_1576602905573.png","marks":5},"filesConfig":{"accepted":"pdf, epub","size":"50"}},{"id":"SelfAssess","label":"Self Assess","onClick":"uploadComponent","mimeType":["application/pdf","application/epub"],"metadata":{"name":"Self Assess","description":"SelfAssess","resourceType":"Read","contentType":"SelfAssess","audience":["Learner"],"appIcon":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21291553100098764812/artifact/focus-spot_1561727473311.thumb_1576602905573.png","marks":5},"filesConfig":{"accepted":"pdf, epub","size":"50"}},{"id":"vsaPracticeQuestionContent","label":"VSA - Practice Sets","onClick":"questionSetComponent","mimeType":["application/vnd.ekstep.ecml-archive"],"metadata":{"name":"Practice QuestionSet","description":"Practice QuestionSet","resourceType":"Learn","contentType":"PracticeQuestionSet","audience":["Learner"],"appIcon":"","marks":5},"questionCategories":["vsa"]},{"id":"saPracticeQuestionContent","label":"SA - Practice Sets","onClick":"questionSetComponent","mimeType":["application/vnd.ekstep.ecml-archive"],"metadata":{"name":"Practice QuestionSet","description":"Practice QuestionSet","resourceType":"Learn","contentType":"PracticeQuestionSet","audience":["Learner"],"appIcon":"","marks":5},"questionCategories":["sa"]},{"id":"laPracticeQuestionContent","label":"LA - Practice Sets","onClick":"questionSetComponent","mimeType":["application/vnd.ekstep.ecml-archive"],"metadata":{"name":"Practice QuestionSet","description":"Practice QuestionSet","resourceType":"Learn","contentType":"PracticeQuestionSet","audience":["Learner"],"appIcon":"","marks":5},"questionCategories":["la"]},{"id":"mcqPracticeQuestionContent","label":"MCQ - Practice Sets","onClick":"questionSetComponent","mimeType":["application/vnd.ekstep.ecml-archive"],"metadata":{"name":"Practice QuestionSet","description":"Practice QuestionSet","resourceType":"Learn","contentType":"PracticeQuestionSet","audience":["Learner"],"appIcon":"","marks":5},"questionCategories":["mcq"]},{"id":"curiositySetContent","label":"Curiosity Sets","onClick":"curiositySetComponent","mimeType":["application/vnd.ekstep.ecml-archive"],"metadata":{"name":"Curiosity QuestionSet","description":"Curiosity QuestionSet","resourceType":"Learn","contentType":"CuriosityQuestionSet","audience":["Learner"],"appIcon":"","marks":5},"questionCategories":["curiosity"]}],"defaultValue":[{"id":"vsaPracticeQuestionContent","label":"Practice Sets","onClick":"questionSetComponent","mimeType":["application/vnd.ekstep.ecml-archive"],"metadata":{"name":"Practice QuestionSet","description":"Practice QuestionSet","resourceType":"Learn","contentType":"PracticeQuestionSet","audience":["Learner"],"appIcon":"","marks":5},"questionCategories":["vsa"]}]}}},{"id":"ng.sunbird.uploadComponent","ver":"1.0","compId":"uploadContentComponent","author":"Kartheek","description":"","publishedDate":"","data":{},"config":{"filesConfig":{"accepted":"pdf, mp4, webm, h5p, epub","size":"50"},"formConfiguration":[{"code":"learningOutcome","dataType":"list","description":"Learning Outcomes For The Content","editable":true,"inputType":"multiselect","label":"Learning Outcome","name":"LearningOutcome","placeholder":"Select Learning Outcomes","required":false,"visible":true},{"code":"attributions","dataType":"list","description":"Enter Attributions","editable":true,"inputType":"text","label":"Attributions","name":"Attributions","placeholder":"Enter Attributions","required":false,"visible":true,"helpText":"If you have relied on another work to create this Content, provide the name of that creator and the source of that work."},{"code":"copyright","dataType":"text","description":"Enter Copyright and Year","editable":true,"inputType":"text","label":"Copyright and Year","name":"Copyright","placeholder":"Enter Copyright and Year","required":true,"visible":true,"helpText":"If you are an individual, creating original Content, you are the copyright holder. If you are creating Content on behalf of an organisation, the organisation may be the copyright holder. Please fill as <Name of copyright holder>, <Year of publication>"},{"code":"creator","dataType":"text","description":"Enter The Author Name","editable":true,"inputType":"text","label":"Author","name":"Author","placeholder":"Enter Author Name","required":true,"visible":true,"helpText":"Provide name of creator of this Content."},{"code":"license","dataType":"list","description":"License For The Content","editable":true,"inputType":"select","label":"License","name":"License","placeholder":"Select License","required":true,"visible":true,"helpText":"Choose the most appropriate Creative Commons License for this Content"},{"code":"contentPolicyCheck","dataType":"boolean","editable":false,"inputType":"checkbox","name":"Content Policy Check","required":true,"visible":true}],"resourceTitleLength":"200","tenantName":"SunbirdEd"}},{"id":"ng.sunbird.practiceSetComponent","ver":"1.0","compId":"practiceSetComponent","author":"Kartheek","description":"","publishedDate":"","data":{},"config":{"No of options":4,"solutionType":["Video","Text & image"],"questionCategory":["vsa","sa","ls","mcq","curiosity"],"formConfiguration":[{"code":"learningOutcome","dataType":"list","description":"Learning Outcomes For The Content","editable":true,"inputType":"multiselect","label":"Learning Outcome","name":"LearningOutcome","placeholder":"Select Learning Outcomes","required":false,"visible":true},{"code":"attributions","dataType":"list","description":"Enter Attributions","editable":true,"inputType":"text","label":"Attributions","name":"Attributions","placeholder":"Enter Attributions","required":false,"visible":true,"helpText":"If you have relied on another work to create this Content, provide the name of that creator and the source of that work."},{"code":"copyright","dataType":"text","description":"Enter Copyright and Year","editable":true,"inputType":"text","label":"Copyright and Year","name":"Copyright","placeholder":"Enter Copyright and Year","required":true,"visible":true,"helpText":"If you are an individual, creating original Content, you are the copyright holder. If you are creating Content on behalf of an organisation, the organisation may be the copyright holder. Please fill as <Name of copyright holder>, <Year of publication>"},{"code":"creator","dataType":"text","description":"Enter The Author Name","editable":true,"inputType":"text","label":"Author","name":"Author","placeholder":"Enter Author Name","required":true,"visible":true,"helpText":"Provide name of creator of this Content."},{"code":"license","dataType":"list","description":"License For The Content","editable":true,"inputType":"select","label":"License","name":"License","placeholder":"Select License","required":true,"visible":true,"helpText":"Choose the most appropriate Creative Commons License for this Content"},{"code":"contentPolicyCheck","dataType":"boolean","editable":false,"inputType":"checkbox","name":"Content Policy Check","required":true,"visible":true}],"resourceTitleLength":"200","tenantName":"","assetConfig":{"image":{"size":"50","accepted":"jpeg, png, jpg"},"video":{"size":"50","accepted":"pdf, mp4, webm, youtube"}}}},{"id":"ng.sunbird.dashboard","ver":"1.0","compId":"dashboardComp","author":"Venkanna Gouda","description":"","publishedDate":"","data":{},"config":{}}],"sharedContext":["channel","framework","board","medium","gradeLevel","subject","topic"],"contributors":{"Org":[{"osid":"18180aff-07ba-4f50-bf4a-04ace80f303b","isChecked":true,"User":{"userId":"e5b9044c-93f6-4d79-a4d1-98acc2a189c2","maskedEmail":"15***@yopmail.com","maskedPhone":null}},{"osid":"e9ac59bd-d9bd-4a71-b55b-ff9bc1f29eb0","isChecked":true,"User":{"userId":"14ea78c0-67fa-42be-b4b6-e42d0d8ca9bc","maskedEmail":"16***@yopmail.com","maskedPhone":null}}],"User":[]},"blueprintMap":{},"collections":[{"id":"do_11316008443414937613","allowed_content_types":[],"children":[{"id":"do_11316008814321664014","allowed_content_types":[]}]}]}}}