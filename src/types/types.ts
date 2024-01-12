export type User = {
    name: string;
    email: string;
    avatar: any;
    role: string;
    _id: string;
    isVerified: boolean;
    lastPlan: any;
    payments: any;
};

export type Tree = {
    _id: string;
    name: string
    scientificName: string;
    treeType: string;
    location: string;
    description: string;
    features: string;
    maintenance: string;
    benefits: string;
    funFact: string;
    qrCode: any;
    user: string;
};
