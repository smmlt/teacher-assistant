// src/lib/types.ts

export type ClassType = {
    id: string;
    teacherId: string;
    name: string;
    subject: string;
}

export type StudentType = {
    id: string;
    name: string;
    surname: string;
}

export type AssessmentType = {
    id: string;
    type: 'thematic' | 'semester' | 'annual';
    topic: string;
    score: number;
    date: Date;
}

export type StudentWithGrades = StudentType & {
    assessments: AssessmentType[];
}
