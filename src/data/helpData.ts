import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'student',
    slug: 'student',
    title: 'Student',
    description: 'Manage student profiles, digital ID cards, enrollment details, and academic record requests.',
    iconName: 'GraduationCap',
    articleCount: 4,
    pdfCount: 4,
    subcategories: [
      {
        id: 'student-guides',
        title: 'Student Management & Profile Guides',
        description: 'Official Okie Dokie procedures for student records, counsellor tags, data export, and alumni.',
        articleCount: 4,
        pdfCount: 4,
        articles: [
          {
            id: 'art-stud-counsellor-tags',
            slug: 'how-to-assign-counsellor-and-tags',
            title: 'How to Assign Counsellor and Tags (COUNSELLOR AND TAGS कैसे ASSIGN करें)',
            description: 'Official step-by-step guide to assigning counsellors and student tags in Okie Dokie Admission portal.',
            categoryId: 'student',
            subcategoryId: 'student-guides',
            readTime: '2 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Student', 'Counsellor', 'Tags', 'Admission', 'Application Data'],
            pdfUrl: '/pdf/How_To_Assign_Counsellor_and_Tags.pdf',
            pdfFileName: 'How_To_Assign_Counsellor_and_Tags.pdf',
            pdfSize: '412 KB'
          },
          {
            id: 'art-stud-update-details',
            slug: 'how-to-update-student-details',
            title: 'How to Update Student Details',
            description: 'Step-by-step guide to editing and updating student profile information and contact records in Okie Dokie ERP.',
            categoryId: 'student',
            subcategoryId: 'student-guides',
            readTime: '3 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Student', 'Profile Update', 'Contact Details', 'Student Management'],
            pdfUrl: '/pdf/How to Update Student Details.pdf',
            pdfFileName: 'How to Update Student Details.pdf',
            pdfSize: '635 KB'
          },
          {
            id: 'art-stud-export-data',
            slug: 'how-to-export-student-data',
            title: 'How to Export Student Data',
            description: 'Guide to exporting student lists, class rosters, and profile data reports to Excel and PDF.',
            categoryId: 'student',
            subcategoryId: 'student-guides',
            readTime: '2 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Student', 'Data Export', 'Excel Report', 'Roster'],
            pdfUrl: '/pdf/How to Export student data.pdf',
            pdfFileName: 'How to Export student data.pdf',
            pdfSize: '656 KB'
          },
          {
            id: 'art-stud-add-alumni',
            slug: 'how-to-add-alumni',
            title: 'How to Add Alumni',
            description: 'Procedure for registering graduating batches and adding students into the Okie Dokie Alumni network.',
            categoryId: 'student',
            subcategoryId: 'student-guides',
            readTime: '3 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Student', 'Alumni', 'Graduation', 'Alumni Network'],
            pdfUrl: '/pdf/How to Add Alumni.pdf',
            pdfFileName: 'How to Add Alumni.pdf',
            pdfSize: '1.1 MB'
          }
        ]
      }
    ]
  },
  {
    id: 'admission',
    slug: 'admission',
    title: 'Admission',
    description: 'Online application submission, counseling schedules, document verification, and seat allocation tracking.',
    iconName: 'UserPlus',
    articleCount: 1,
    pdfCount: 1,
    subcategories: [
      {
        id: 'adm-guides',
        title: 'Admission Registration Guides',
        description: 'Guides on tracking prospectus registration transactions and applicant data.',
        articleCount: 1,
        pdfCount: 1,
        articles: [
          {
            id: 'art-adm-prospectus-transactions',
            slug: 'how-to-check-prospectus-registration-transactions',
            title: 'How to Check Prospectus & Registration Transactions',
            description: 'Step-by-step guide to verifying prospectus purchases, registration payment logs, and applicant transactions.',
            categoryId: 'admission',
            subcategoryId: 'adm-guides',
            readTime: '3 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Admission', 'Prospectus', 'Registration', 'Transactions', 'Payment Log'],
            pdfUrl: '/pdf/How to Check Prospectus  Registration Transactions.pdf',
            pdfFileName: 'How to Check Prospectus  Registration Transactions.pdf',
            pdfSize: '422 KB'
          }
        ]
      }
    ]
  },
  {
    id: 'staff',
    slug: 'staff',
    title: 'Staff & Faculty',
    description: 'Faculty portal for workload management, lecture scheduling, student grading, and leave applications.',
    iconName: 'Briefcase',
    articleCount: 0,
    pdfCount: 0,
    subcategories: []
  },
  {
    id: 'fee',
    slug: 'fee',
    title: 'Fee',
    description: 'Online semester fee payments, hostel mess charges, payment receipts, installment requests, and scholarships.',
    iconName: 'CreditCard',
    articleCount: 1,
    pdfCount: 1,
    subcategories: [
      {
        id: 'fee-guides',
        title: 'Fee Collection Guides',
        description: 'Procedure for collecting registration fees and issuing payment receipts.',
        articleCount: 1,
        pdfCount: 1,
        articles: [
          {
            id: 'art-fee-collect-registration',
            slug: 'how-to-collect-registration-fee',
            title: 'How to Collect Registration Fee',
            description: 'Official procedure for collecting registration fees online and at counter desks with automated receipts.',
            categoryId: 'fee',
            subcategoryId: 'fee-guides',
            readTime: '2 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Fee', 'Registration Fee', 'Fee Collection', 'Payment Receipt'],
            pdfUrl: '/pdf/How to Collect Registration Fee.pdf',
            pdfFileName: 'How to Collect Registration Fee.pdf',
            pdfSize: '460 KB'
          }
        ]
      }
    ]
  },
  {
    id: 'gate-pass',
    slug: 'gate-pass',
    title: 'Gate Pass',
    description: 'Digital outpass generation, day-scholar movement, weekend leave permissions, and visitor QR entry passes.',
    iconName: 'ShieldCheck',
    articleCount: 0,
    pdfCount: 0,
    subcategories: []
  },
  {
    id: 'counsellor',
    slug: 'counsellor',
    title: 'Counsellor',
    description: 'Academic mentorship allocation, student well-being sessions, confidential counseling appointments, and career guidance.',
    iconName: 'HeartHandshake',
    articleCount: 0,
    pdfCount: 0,
    subcategories: []
  },
  {
    id: 'transport',
    slug: 'transport',
    title: 'Transport',
    description: 'Bus route tracking, live GPS location of campus shuttles, transport pass registration, and route fee payments.',
    iconName: 'Bus',
    articleCount: 0,
    pdfCount: 0,
    subcategories: []
  },
  {
    id: 'hostel',
    slug: 'hostel',
    title: 'Hostel',
    description: 'Hostel room allotment, mess menu calendar, maintenance complaint desk, and room migration requests.',
    iconName: 'Home',
    articleCount: 0,
    pdfCount: 0,
    subcategories: []
  },
  {
    id: 'library',
    slug: 'library',
    title: 'Library',
    description: 'Online book catalog search, digital book reservation, e-journals, fine payment, and renewal requests.',
    iconName: 'BookOpen',
    articleCount: 0,
    pdfCount: 0,
    subcategories: []
  },
  {
    id: 'examination',
    slug: 'examination',
    title: 'Examination',
    description: 'Exam timetables, downloading hall tickets / admit cards, grade sheets, re-evaluation, and backlog registration.',
    iconName: 'FileCheck2',
    articleCount: 1,
    pdfCount: 1,
    subcategories: [
      {
        id: 'exam-guides',
        title: 'Examination & Admit Card Guides',
        description: 'Step-by-step instructions for issuing admit cards and managing exam sessions.',
        articleCount: 1,
        pdfCount: 1,
        articles: [
          {
            id: 'art-exam-issue-admit-cards',
            slug: 'issue-admit-cards-from-erp',
            title: 'Issue Admit Cards from ERP',
            description: 'Complete guide to generating, verifying eligibility, and issuing exam admit cards / hall tickets from Okie Dokie ERP.',
            categoryId: 'examination',
            subcategoryId: 'exam-guides',
            readTime: '3 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Examination', 'Admit Card', 'Hall Ticket', 'ERP Exam Desk'],
            pdfUrl: '/pdf/Issue Admit Cards from ERP.pdf',
            pdfFileName: 'Issue Admit Cards from ERP.pdf',
            pdfSize: '1.2 MB'
          }
        ]
      }
    ]
  },
  {
    id: 'attendance',
    slug: 'attendance',
    title: 'Attendance',
    description: 'Subject-wise attendance tracking, condonation requests, biometric logs, and medical leave submission.',
    iconName: 'CalendarCheck',
    articleCount: 0,
    pdfCount: 0,
    subcategories: []
  },
  {
    id: 'payroll',
    slug: 'payroll',
    title: 'Payroll',
    description: 'Faculty and staff salary slip downloads, tax deduction declarations, Form 16, and reimbursement claims.',
    iconName: 'BadgeDollarSign',
    articleCount: 0,
    pdfCount: 0,
    subcategories: []
  },
  {
    id: 'inventory',
    slug: 'inventory',
    title: 'Inventory',
    description: 'Laboratory equipment requisition, department asset tracking, store supplies, and maintenance logs.',
    iconName: 'Boxes',
    articleCount: 0,
    pdfCount: 0,
    subcategories: []
  },
  {
    id: 'placement',
    slug: 'placement',
    title: 'Placement',
    description: 'Campus placement drive registration, resume builder, company shortlists, interview slots, and offer letter tracking.',
    iconName: 'Building2',
    articleCount: 0,
    pdfCount: 0,
    subcategories: []
  },
  {
    id: 'grievance',
    slug: 'grievance',
    title: 'Feedback & Grievance',
    description: 'Student feedback submission, anti-ragging cell, sexual harassment redressal, and anonymous complaint box.',
    iconName: 'MessageSquareWarning',
    articleCount: 0,
    pdfCount: 0,
    subcategories: []
  },
  {
    id: 'system',
    slug: 'system',
    title: 'System & Admin Settings',
    description: 'Account security, password resets, Single Sign-On (SSO) login issues, 2FA setup, and system notifications.',
    iconName: 'Settings',
    articleCount: 0,
    pdfCount: 0,
    subcategories: []
  }
];

export const POPULAR_TAGS = [
  'Digital ID', 'Outpass', 'Tuition Fee', 'Hall Ticket', '75% Attendance',
  'Hostel Room', 'Bus Live GPS', 'Internal Marks', 'Placement Drive', 'Password Reset'
];

export const TOP_FAQS = [
  {
    q: 'How do I download my Okie Dokie Digital ID badge?',
    a: 'Open the Okie Dokie app home tab, tap the top ID icon, and present the dynamic QR pass to the main gate scanner.'
  },
  {
    q: 'What is the minimum attendance required for exam eligibility?',
    a: 'Okie Dokie automatically tracks your attendance; you must maintain at least 75% in each subject to be eligible for hall ticket issuance.'
  },
  {
    q: 'How long does a hostel outpass parent OTP approval take?',
    a: 'Parent OTP verification is instant via SMS & WhatsApp. Once entered, warden approval is granted within 5-15 minutes.'
  },
  {
    q: 'Can I pay semester fees using UPI or NetBanking?',
    a: 'Yes! Okie Dokie supports 0% surcharge UPI (Google Pay, PhonePe, Paytm), NetBanking, Credit Cards, and Education Loan disbursement portals.'
  }
];
