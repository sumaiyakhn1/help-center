import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'student',
    slug: 'student',
    title: 'Student',
    description: 'Manage student profiles, digital ID cards, enrollment details, and academic record requests.',
    iconName: 'GraduationCap',
    articleCount: 7,
    pdfCount: 7,
    subcategories: [
      {
        id: 'student-guides',
        title: 'Student Management PDF Guides',
        description: 'Official Okie Dokie procedures for student records, counsellor tags, data export, ID cards, and alumni.',
        articleCount: 7,
        pdfCount: 7,
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
            pdfUrl: '/pdf/How to Assign Counsellor and Tags.pdf',
            pdfFileName: 'How to Assign Counsellor and Tags.pdf',
            pdfSize: '481 KB'
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
          },
          {
            id: 'art-stud-assign-roll-no',
            slug: 'how-to-assign-roll-number',
            title: 'How to Assign Roll Number',
            description: 'Step-by-step guide to assigning official roll numbers to enrolled students in bulk or individually.',
            categoryId: 'student',
            subcategoryId: 'student-guides',
            readTime: '2 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Student', 'Roll Number', 'Enrollment', 'Academic ID'],
            pdfUrl: '/pdf/How to Assign Roll Number.pdf',
            pdfFileName: 'How to Assign Roll Number.pdf',
            pdfSize: '635 KB'
          },
          {
            id: 'art-stud-bulk-id-cards',
            slug: 'how-to-print-id-cards-in-bulk',
            title: 'How to Print ID Cards in Bulk',
            description: 'Procedure for printing dynamic student photo ID cards in bulk from Okie Dokie ERP.',
            categoryId: 'student',
            subcategoryId: 'student-guides',
            readTime: '3 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Student', 'Bulk Print', 'ID Card', 'Print Badge'],
            pdfUrl: '/pdf/How to Print ID Cards in Bulk.pdf',
            pdfFileName: 'How to Print ID Cards in Bulk.pdf',
            pdfSize: '646 KB'
          },
          {
            id: 'art-stud-shift-group',
            slug: 'how-to-shift-student-in-group',
            title: 'How to Shift Student in Group',
            description: 'Guide to transferring and shifting groups of students across sections, batches, or study groups.',
            categoryId: 'student',
            subcategoryId: 'student-guides',
            readTime: '2 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Student', 'Section Shift', 'Batch Group', 'Student Movement'],
            pdfUrl: '/pdf/How to Shift Student in Group.pdf',
            pdfFileName: 'How to Shift Student in Group.pdf',
            pdfSize: '566 KB'
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
    articleCount: 2,
    pdfCount: 2,
    subcategories: [
      {
        id: 'adm-guides',
        title: 'Admission Registration PDF Guides',
        description: 'Guides on tracking prospectus registration transactions and applicant source data.',
        articleCount: 2,
        pdfCount: 2,
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
          },
          {
            id: 'art-adm-other-source',
            slug: 'how-to-check-other-source-application',
            title: 'How to Check Other Source Application',
            description: 'Guide to tracking admission applications received via external portals, walk-ins, and secondary lead channels.',
            categoryId: 'admission',
            subcategoryId: 'adm-guides',
            readTime: '2 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Admission', 'Lead Sources', 'External Applications', 'Walk-in'],
            pdfUrl: '/pdf/How to Check Other Source Application.pdf',
            pdfFileName: 'How to Check Other Source Application.pdf',
            pdfSize: '357 KB'
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
    articleCount: 6,
    pdfCount: 6,
    subcategories: [
      {
        id: 'staff-guides',
        title: 'Faculty & Class Mapping PDF Guides',
        description: 'Guides for faculty allocation, class editing, subject combination, and subject mapping.',
        articleCount: 6,
        pdfCount: 6,
        articles: [
          {
            id: 'art-staff-allocate-subject',
            slug: 'how-to-allocate-subject',
            title: 'How to Allocate Subject',
            description: 'Procedure for allocating subject responsibilities to teachers and faculty members.',
            categoryId: 'staff',
            subcategoryId: 'staff-guides',
            readTime: '3 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Staff', 'Subject Allocation', 'Faculty Workload', 'Academics'],
            pdfUrl: '/pdf/How to Allocate Subject.pdf',
            pdfFileName: 'How to Allocate Subject.pdf',
            pdfSize: '640 KB'
          },
          {
            id: 'art-staff-assign-subject',
            slug: 'how-to-assign-subject',
            title: 'How to Assign Subject',
            description: 'Step-by-step guide to assigning subjects to student batches and class schedules.',
            categoryId: 'staff',
            subcategoryId: 'staff-guides',
            readTime: '3 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Staff', 'Subject Assignment', 'Class Schedule', 'Curriculum'],
            pdfUrl: '/pdf/How to Assign Subject.pdf',
            pdfFileName: 'How to Assign Subject.pdf',
            pdfSize: '677 KB'
          },
          {
            id: 'art-staff-edit-class',
            slug: 'how-to-edit-class',
            title: 'How to Edit Class',
            description: 'Guide to modifying class names, sections, room assignments, and academic year details.',
            categoryId: 'staff',
            subcategoryId: 'staff-guides',
            readTime: '2 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Staff', 'Edit Class', 'Class Section', 'Room Assignment'],
            pdfUrl: '/pdf/How to Edit Class.pdf',
            pdfFileName: 'How to Edit Class.pdf',
            pdfSize: '636 KB'
          },
          {
            id: 'art-staff-subject-combination',
            slug: 'how-to-edit-subject-combination',
            title: 'How to Edit Subject Combination',
            description: 'Procedure for creating and editing elective and core subject combinations for student streams.',
            categoryId: 'staff',
            subcategoryId: 'staff-guides',
            readTime: '3 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Staff', 'Subject Combination', 'Electives', 'Curriculum'],
            pdfUrl: '/pdf/How to Edit Subject Combination.pdf',
            pdfFileName: 'How to Edit Subject Combination.pdf',
            pdfSize: '479 KB'
          },
          {
            id: 'art-staff-class-mapping-school',
            slug: 'how-to-create-subject-class-mapping-school',
            title: 'How to Create Subject Class Mapping - School',
            description: 'Detailed instructions for mapping subjects to school classes and grade levels.',
            categoryId: 'staff',
            subcategoryId: 'staff-guides',
            readTime: '3 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Staff', 'School Mapping', 'Subject Class', 'School ERP'],
            pdfUrl: '/pdf/How to create subject class Mapping - school.pdf',
            pdfFileName: 'How to create subject class Mapping - school.pdf',
            pdfSize: '575 KB'
          },
          {
            id: 'art-staff-class-mapping-college',
            slug: 'how-to-create-subject-class-mapping-college',
            title: 'How to Create Subject Class Mapping - College',
            description: 'Instructions for mapping subjects, credits, and departments to college degree programs.',
            categoryId: 'staff',
            subcategoryId: 'staff-guides',
            readTime: '3 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Staff', 'College Mapping', 'Degree Program', 'Credit Mapping'],
            pdfUrl: '/pdf/How to create subject class Mapping - college.pdf',
            pdfFileName: 'How to create subject class Mapping - college.pdf',
            pdfSize: '575 KB'
          }
        ]
      }
    ]
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
        title: 'Fee Collection PDF Guides',
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
    articleCount: 2,
    pdfCount: 2,
    subcategories: [
      {
        id: 'gp-guides',
        title: 'Visitor & Gate Pass PDF Guides',
        description: 'Instructions for issuing gate passes to employees/students and logging visitor pass check-ins.',
        articleCount: 2,
        pdfCount: 2,
        articles: [
          {
            id: 'art-gp-issue-pass',
            slug: 'how-to-issue-gate-pass',
            title: 'How to Issue Gate Pass (GATE PASS कैसे ISSUE करें)',
            description: 'Official step-by-step guide to issuing gate passes to Employees, Students, and Visitors in Okie Dokie Front Desk module.',
            categoryId: 'gate-pass',
            subcategoryId: 'gp-guides',
            readTime: '3 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Gate Pass', 'Front Desk', 'Employee Pass', 'Student Pass', 'Approver'],
            pdfUrl: '/pdf/How to Issue Gate Pass.pdf',
            pdfFileName: 'How to Issue Gate Pass.pdf',
            pdfSize: '238 KB'
          },
          {
            id: 'art-gp-visitor-pass',
            slug: 'how-to-do-visitor-pass-entry',
            title: 'How To Do Visitor Pass Entry',
            description: 'Step-by-step guide to generating pre-approved visitor gate passes and logging visitor check-ins.',
            categoryId: 'gate-pass',
            subcategoryId: 'gp-guides',
            readTime: '2 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Gate Pass', 'Visitor Entry', 'Campus Security', 'Guest QR'],
            pdfUrl: '/pdf/How To Do Visitor Pass Entry.pdf',
            pdfFileName: 'How To Do Visitor Pass Entry.pdf',
            pdfSize: '517 KB'
          }
        ]
      }
    ]
  },
  {
    id: 'counsellor',
    slug: 'counsellor',
    title: 'Counsellor',
    description: 'Academic mentorship allocation, student well-being sessions, confidential counseling appointments, and career guidance.',
    iconName: 'HeartHandshake',
    articleCount: 1,
    pdfCount: 1,
    subcategories: [
      {
        id: 'counsel-guides',
        title: 'Counsellor & Mentorship PDF Guides',
        description: 'Guide on assigning counsellors and student tags in Okie Dokie portal.',
        articleCount: 1,
        pdfCount: 1,
        articles: [
          {
            id: 'art-counsellor-tags-quick',
            slug: 'how-to-assign-counsellor-and-tags-quick-guide',
            title: 'How to Assign Counsellor and Tags (Quick Guide)',
            description: 'SOP guide for assigning student counsellors and classification tags.',
            categoryId: 'counsellor',
            subcategoryId: 'counsel-guides',
            readTime: '2 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Counsellor', 'Mentorship', 'Student Tags', 'Allocation'],
            pdfUrl: '/pdf/How_To_Assign_Counsellor_and_Tags.pdf',
            pdfFileName: 'How_To_Assign_Counsellor_and_Tags.pdf',
            pdfSize: '411 KB'
          }
        ]
      }
    ]
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
    articleCount: 1,
    pdfCount: 1,
    subcategories: [
      {
        id: 'lib-guides',
        title: 'Library Circulation PDF Guides',
        description: 'Procedure for issuing books and managing library catalog records.',
        articleCount: 1,
        pdfCount: 1,
        articles: [
          {
            id: 'art-lib-issue-book',
            slug: 'how-to-issue-library-book-to-students',
            title: 'How to Issue Library Book to Students',
            description: 'Official procedure for issuing library books to students using barcode / QR scanners.',
            categoryId: 'library',
            subcategoryId: 'lib-guides',
            readTime: '2 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Library', 'Issue Book', 'Circulation', 'Barcode Scan'],
            pdfUrl: '/pdf/HOW TO ISSUE LIBRARY BOOK TO STUDENTS .pdf',
            pdfFileName: 'HOW TO ISSUE LIBRARY BOOK TO STUDENTS .pdf',
            pdfSize: '506 KB'
          }
        ]
      }
    ]
  },
  {
    id: 'examination',
    slug: 'examination',
    title: 'Examination',
    description: 'Exam timetables, downloading hall tickets / admit cards, grade sheets, re-evaluation, and backlog registration.',
    iconName: 'FileCheck2',
    articleCount: 4,
    pdfCount: 4,
    subcategories: [
      {
        id: 'exam-guides',
        title: 'Examination & Admit Card PDF Guides',
        description: 'Step-by-step instructions for issuing admit cards, declaring results, and course outcome mapping.',
        articleCount: 4,
        pdfCount: 4,
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
          },
          {
            id: 'art-exam-declare-result',
            slug: 'how-to-declare-result',
            title: 'How to Declare Result',
            description: 'Step-by-step procedure to compile grades, lock marks, and declare semester exam results on student portal.',
            categoryId: 'examination',
            subcategoryId: 'exam-guides',
            readTime: '3 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Examination', 'Declare Result', 'Semester Grade', 'Marks Lock'],
            pdfUrl: '/pdf/How to Declare Result.pdf',
            pdfFileName: 'How to Declare Result.pdf',
            pdfSize: '822 KB'
          },
          {
            id: 'art-exam-declare-result-detailed',
            slug: 'how-to-declare-result-detailed',
            title: 'How to Declare Result (Detailed SOP)',
            description: 'Advanced guide to batch result publishing, grace marks allocation, and backlog result updates.',
            categoryId: 'examination',
            subcategoryId: 'exam-guides',
            readTime: '4 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Examination', 'Batch Result', 'Grace Marks', 'Result SOP'],
            pdfUrl: '/pdf/How to Declare Result (1).pdf',
            pdfFileName: 'How to Declare Result (1).pdf',
            pdfSize: '1.0 MB'
          },
          {
            id: 'art-exam-co-mapping',
            slug: 'how-to-create-co-mapping',
            title: 'How to Create CO Mapping',
            description: 'Guide to creating Course Outcome (CO) and Program Outcome (PO) mapping matrix in examination setup.',
            categoryId: 'examination',
            subcategoryId: 'exam-guides',
            readTime: '3 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Examination', 'CO Mapping', 'Course Outcome', 'Accreditation'],
            pdfUrl: '/pdf/How to Create CO Mapping.pdf',
            pdfFileName: 'How to Create CO Mapping.pdf',
            pdfSize: '769 KB'
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
    articleCount: 1,
    pdfCount: 1,
    subcategories: [
      {
        id: 'grievance-guides',
        title: 'Feedback & Redressal PDF Guides',
        description: 'Procedure for submitting institutional feedback and student reviews.',
        articleCount: 1,
        pdfCount: 1,
        articles: [
          {
            id: 'art-grievance-institute-feedback',
            slug: 'how-to-submit-institute-feedback',
            title: 'How to Submit Institute Feedback',
            description: 'Guide to submitting institutional feedback, faculty evaluations, and infrastructure suggestions.',
            categoryId: 'grievance',
            subcategoryId: 'grievance-guides',
            readTime: '2 min read',
            updatedAt: '2026-08-05',
            author: 'Okie Dokie Solutions LLP',
            tags: ['Feedback', 'Institute Feedback', 'Faculty Evaluation', 'Grievance'],
            pdfUrl: '/pdf/How to submit Institute feedback.pdf',
            pdfFileName: 'How to submit Institute feedback.pdf',
            pdfSize: '557 KB'
          }
        ]
      }
    ]
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
