import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const patients = [
  {
    patientId: 'PT-10001',
    firstName: 'Miguel',
    lastName: 'Santos',
    dateOfBirth: new Date('2016-03-14'),
    age: 10,
    sex: 'Male',
    mobileNumber: '+63 917 000 1001',
    emailAddress: 'miguel.santos@example.com',
    homeAddress: 'Quezon City, Metro Manila',
    fatherName: 'Roberto Santos',
    fatherAge: 39,
    fatherOccupation: 'Engineer',
    fatherContactNumber: '+63 917 100 1001',
    motherName: 'Elena Santos',
    motherAge: 37,
    motherOccupation: 'Teacher',
    motherContactNumber: '+63 917 200 1001',
    emergencyContactName: 'Elena Santos',
    emergencyContactRelationship: 'Mother',
    emergencyContactNumber: '+63 917 200 1001',
    emergencyPreferredHospital: 'Philippine Children’s Medical Center',
    bloodType: 'O+',
    philHealthInsuranceId: 'TEST-PHIC-10001',
    allergies: 'Peanuts',
    conditions: 'Mild asthma',
  },
  {
    patientId: 'PT-10002',
    firstName: 'Sofia',
    lastName: 'Reyes',
    dateOfBirth: new Date('2019-08-22'),
    age: 6,
    sex: 'Female',
    mobileNumber: '+63 917 000 1002',
    emailAddress: 'sofia.reyes@example.com',
    homeAddress: 'Pasig City, Metro Manila',
    fatherName: 'Daniel Reyes',
    fatherAge: 35,
    fatherOccupation: 'Accountant',
    fatherContactNumber: '+63 917 100 1002',
    motherName: 'Marissa Reyes',
    motherAge: 34,
    motherOccupation: 'Nurse',
    motherContactNumber: '+63 917 200 1002',
    emergencyContactName: 'Daniel Reyes',
    emergencyContactRelationship: 'Father',
    emergencyContactNumber: '+63 917 100 1002',
    emergencyPreferredHospital: 'The Medical City',
    bloodType: 'A+',
    philHealthInsuranceId: 'TEST-PHIC-10002',
    allergies: 'No known allergies',
    conditions: 'No known conditions',
  },
  {
    patientId: 'PT-10003',
    firstName: 'Lucas',
    lastName: 'Garcia',
    dateOfBirth: new Date('2013-11-05'),
    age: 12,
    sex: 'Male',
    mobileNumber: '+63 917 000 1003',
    emailAddress: 'lucas.garcia@example.com',
    homeAddress: 'Makati City, Metro Manila',
    fatherName: 'Antonio Garcia',
    fatherAge: 44,
    fatherOccupation: 'Architect',
    fatherContactNumber: '+63 917 100 1003',
    motherName: 'Carla Garcia',
    motherAge: 42,
    motherOccupation: 'Business Owner',
    motherContactNumber: '+63 917 200 1003',
    emergencyContactName: 'Carla Garcia',
    emergencyContactRelationship: 'Mother',
    emergencyContactNumber: '+63 917 200 1003',
    emergencyPreferredHospital: 'Makati Medical Center',
    bloodType: 'B+',
    philHealthInsuranceId: 'TEST-PHIC-10003',
    allergies: 'Penicillin',
    conditions: 'Allergic rhinitis',
  },
];

async function main() {
  for (const patient of patients) {
    await prisma.patient.upsert({
      where: { patientId: patient.patientId },
      update: patient,
      create: patient,
    });
  }

  console.log(`Seeded ${patients.length} fictional patient records.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
