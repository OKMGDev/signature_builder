import { asset } from './assets';

export const COMPANY_LOGOS = {
  'Pure Leasing': {
    src: asset('pure-logo.png'),
    alt: 'Pure Leasing',
    width: 180,
    height: 57
  }
};

export const COMPANY_DETAILS = {
  'Pure Leasing': {
    phone: '08 9388 3111',
    address: '2/200 Nicholson Road, Subiaco WA 6008',
    postal: 'PO Box 47, Subiaco WA 6904',
    website: {
      url: 'https://pureleasing.com.au/',
      label: 'pureleasing.com.au'
    }
  }
};

export const DISCLAIMER_TEXT =
  'This message and any attached files may contain information that is confidential and/or subject of legal privilege intended only for use by the intended recipient. If you are not the intended recipient or the person responsible for delivering the message to the intended recipient, be advised that you have received this message in error and that any dissemination, copying or use of this message or attachment is strictly forbidden, as is the disclosure of the information therein. If you have received this message in error please notify the sender immediately and delete the message.';

export const SIGNATURE_STYLES = {
  name: {
    fontSize: '12pt',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: '#FA9C0F'
  },
  job: {
    fontSize: '9pt',
    textTransform: 'capitalize',
    color: '#555555'
  },
  contact: {
    fontSize: '9pt'
  },
  disclaimer: {
    fontSize: '8pt',
    fontStyle: 'italic',
    color: '#707070'
  }
};
