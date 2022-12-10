interface TodoModel {
    id: string;
    createdAt?: Date;
    createdBy?: string | null;
    title: string;
    description: string | null;
    needsReminder: boolean;
}

export type { TodoModel };
