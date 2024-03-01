exports.MockData = class {
  // For tests.
  mockConfig = {
    pk: 'config',
    sk: 'config'
  };
  mockCurrentParkName1 = {
    pk: '1',
    sk: 'Details',
    createDate: '2019-08-10T16:15:50.868Z',
    updateDate: '2023-08-10T16:11:54.513Z',
    legalName: 'Test Park 1',
    displayName: 'Test Park 1',
    phoneticName: 'tɛst pɑːk wʌn',
    status: 'established',
    notes: 'some notes'
  };
  mockOldParkName1 = {
    pk: '1',
    sk: '2019-08-10T16:15:50.868Z',
    legalName: 'Old Park 1',
    displayName: 'Old Park 1',
    phoneticName: 'əʊld pɑːk wʌn',
    status: 'historical',
    notes: 'some notes'
  };
  mockCurrentParkName2 = {
    pk: '2',
    sk: 'Details',
    createDate: '2023-08-10T16:11:54.513Z',
    updateDate: '2023-08-10T16:11:54.513Z',
    legalName: 'Test Park 2',
    displayName: 'Test Park 2',
    phoneticName: 'tɛst pɑːk tuː',
    status: 'established',
    notes: 'some notes'
  };
  mockPendingParkName1 = {
    pk: '3',
    sk: 'Details',
    createDate: '2023-08-10T16:11:54.513Z',
    updateDate: '2023-08-10T16:11:54.513Z',
    legalName: 'Test Park 3',
    displayName: 'Test Park 3',
    phoneticName: 'tɛst pɑːk 3',
    status: 'pending',
    notes: 'some notes'
  };
  mockParkSite1 = {
    pk: '1',
    sk: 'Site::1',
    displayName: 'Test Site 1-1',
  };
  mockParkSite2 = {
    pk: '3',
    sk: 'Site::1',
    displayName: 'Test Site 3-1',
  };
  mockCurrentSite1 = {
    pk: '1::Site::1',
    sk: 'Details',
    createDate: '2023-08-10T16:11:54.513Z',
    updateDate: '2023-08-10T16:11:54.513Z',
    legalName: 'Test Site 1-1',
    displayName: 'Test Site 1-1',
    phoneticName: 'tɛst site wʌn',
    status: 'established',
    lastModifiedBy: 'TESTADMIN',
    type: 'site'
  };
  mockOldSite1 = {
    pk: '1::Site::1',
    sk: '2019-08-10T16:15:50.868Z',
    legalName: 'Old Site 1-1',
    displayName: 'Old Site 1-1',
    phoneticName: 'əʊld site wʌn',
    status: 'historical',
    lastModifiedBy: 'TESTADMIN',
    newLegalName: 'Test Site 1-1',
    newEffectiveDate: '2020-08-10T16:15:50.868Z',
    displayId: '0001-1',
    legalNameChanged: 'true',
    statusChanged: 'false'
  };
  mockCurrentSite2 = {
    pk: '3::Site::1',
    sk: 'Details',
    createDate: '2023-08-10T16:11:54.513Z',
    updateDate: '2023-08-10T16:11:54.513Z',
    legalName: 'Test Site 3-1',
    displayName: 'Test Site 3-1',
    phoneticName: 'tɛst site wʌn',
    status: 'established',
    lastModifiedBy: 'TESTADMIN',
    type: 'site'
  };

  allData = () => {
    return [
      this.mockConfig,
      this.mockCurrentParkName1,
      this.mockCurrentParkName2,
      this.mockOldParkName1,
      this.mockPendingParkName1,
      this.mockParkSite1,
      this.mockParkSite2,
      this.mockCurrentSite1,
      this.mockOldSite1,
      this.mockCurrentSite2
    ]
  }
}
