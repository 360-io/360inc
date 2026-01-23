import { createClient } from "microcms-js-sdk";

// Types matching microCMS schema
export interface MicroCMSImage {
    url: string;
    height: number;
    width: number;
}

export interface Technology {
    id: string;
    name: string;
    icon?: MicroCMSImage;
}

// Custom Field Blocks for Project LP
export type ProjectBlock =
    | {
        fieldId: "FullWidthImage";
        src: MicroCMSImage;
        alt: string;
        caption?: string;
    }
    | {
        fieldId: "SectionHeading";
        title: string;
        subtitle?: string;
        alignment: "left" | "center" | "right";
    }
    | {
        fieldId: "ImageAndText";
        image: MicroCMSImage;
        title: string;
        description: string; // Rich Editor or Text Area
        direction: "image_left" | "image_right";
    }
    | {
        fieldId: "FeatureGrid";
        title?: string;
        items: {
            fieldId: "FeatureItem";
            icon: MicroCMSImage;
            title: string;
            text: string;
        }[];
    }
    | {
        fieldId: "TechStack";
        technologies: Technology[];
    }
    | {
        fieldId: "RichContent";
        body: string;
    };

export interface Project {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    description: string;
    thumbnail: MicroCMSImage;
    client?: string;
    role?: string;
    period?: string;
    url?: string;
    bodyContent: ProjectBlock[];
    category: string[];
}

export interface Blog {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    excerpt: string;
    thumbnail: MicroCMSImage;
    content: string;
    toc_visible?: boolean;
    category: string[];
    tags?: Technology[];
    author: string;
}

export interface MicroCMSListResponse<T> {
    contents: T[];
    totalCount: number;
    offset: number;
    limit: number;
}

// Mock Client for Development without Keys
const MOCK_PROJECTS: Project[] = [
    {
        id: "proj-1",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        revisedAt: new Date().toISOString(),
        title: "Global Tech Summit 2025",
        description: "Branding and digital experience for the world's largest tech conference.",
        thumbnail: {
            url: "/backgrounds/insta_post_3_1768753848844.png",
            height: 1080,
            width: 1080,
        },
        client: "Tech Summit Inc.",
        role: "Branding, Web Design",
        period: "3 months",
        url: "https://example.com",
        bodyContent: [
            {
                fieldId: "SectionHeading",
                title: "Concept",
                subtitle: "The Core Idea",
                alignment: "center"
            },
            {
                fieldId: "RichContent",
                body: "<p>The concept behind the design was to visualize the invisible connections of the digital world...</p>"
            },
            {
                fieldId: "FullWidthImage",
                src: { url: "/backgrounds/insta_post_3_1768753848844.png", height: 1080, width: 1080 },
                alt: "Key Visual"
            }
        ],
        category: ["Branding", "Web Design"],
    },
    {
        id: "proj-2",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        revisedAt: new Date().toISOString(),
        title: "EcoFuture Mobile App",
        description: "A sustainable lifestyle app helping users track their carbon footprint.",
        thumbnail: {
            url: "/backgrounds/insta_post_2_1768753831383.png",
            height: 1080,
            width: 1080,
        },
        client: "EcoFuture Ltd.",
        role: "App Development, UI/UX",
        period: "4 months",
        bodyContent: [
            {
                fieldId: "ImageAndText",
                image: { url: "/backgrounds/insta_post_2_1768753831383.png", height: 1080, width: 1080 },
                title: "User Experience",
                description: "<p>Focusing on ease of use and positive reinforcement...</p>",
                direction: "image_left"
            }
        ],
        category: ["App Development", "UI/UX"],
    },
    {
        id: "proj-3",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        revisedAt: new Date().toISOString(),
        title: "Neon City Installation",
        description: "Interactive lighting installation for Tokyo's Shibuya district.",
        thumbnail: {
            url: "/backgrounds/insta_post_1_1768753814980.png",
            height: 1080,
            width: 1080,
        },
        client: "Shibuya City",
        role: "Art Direction",
        bodyContent: [
            {
                fieldId: "RichContent",
                body: "<p>An immersive light experience...</p>"
            }
        ],
        category: ["Art Direction", "Installation"],
    },
];

const MOCK_BLOGS: Blog[] = [
    {
        id: "blog-1",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        revisedAt: new Date().toISOString(),
        title: "The Future of WebGL in Web Design",
        excerpt: "Exploring how 3D graphics are transforming modern web experiences.",
        thumbnail: {
            url: "/backgrounds/tech_abstract_1_1768752758216.png",
            height: 800,
            width: 1200,
        },
        content: "<p>WebGL allows for...</p>",
        category: ["Tech"],
        tags: [{ id: "t1", name: "WebGL" }],
        author: "Taro Yamada",
    },
    {
        id: "blog-2",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        revisedAt: new Date().toISOString(),
        title: "Designing for Translucency",
        excerpt: "Tips for creating readable and beautiful glassmorphic interfaces.",
        thumbnail: {
            url: "/backgrounds/tech_abstract_2_1768752774406.png",
            height: 800,
            width: 1200,
        },
        content: "<p>Glassmorphism is...</p>",
        category: ["Design"],
        tags: [{ id: "t2", name: "UI/UX" }],
        author: "Hanako Suzuki",
    },
    {
        id: "blog-3",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        revisedAt: new Date().toISOString(),
        title: "2026 Design Trends Report",
        excerpt: "What to expect in the coming year of digital design.",
        thumbnail: {
            url: "/backgrounds/tech_abstract_3_1768752790326.png",
            height: 800,
            width: 1200,
        },
        content: "<p>Trends are...</p>",
        category: ["Trend"],
        author: "Kenji Sato",
    },
];

// Initialize Client (will fail without keys, so we handle that)
// Initialize Client (will fail without keys, so we handle that)
// Also check if keys are the default placeholders to avoid 404s
const client =
    import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN &&
        import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN !== "YOUR_DOMAIN_HERE" &&
        import.meta.env.PUBLIC_MICROCMS_API_KEY &&
        import.meta.env.PUBLIC_MICROCMS_API_KEY !== "YOUR_API_KEY_HERE"
        ? createClient({
            serviceDomain: import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN,
            apiKey: import.meta.env.PUBLIC_MICROCMS_API_KEY,
        })
        : null;

export const getProjects = async (queries?: any): Promise<MicroCMSListResponse<Project>> => {
    if (!client) {
        return {
            contents: MOCK_PROJECTS,
            totalCount: MOCK_PROJECTS.length,
            offset: 0,
            limit: 10,
        };
    }
    try {
        return await client.getList<Project>({ endpoint: "projects", queries });
    } catch (error) {
        console.warn("Retrying with endpoint 'project'...");
        try {
            return await client.getList<Project>({ endpoint: "project", queries });
        } catch (retryError) {
            console.error("MicroCMS connection failed for endpoints 'projects' and 'project'. Falling back to mock data.", retryError);
            return {
                contents: MOCK_PROJECTS,
                totalCount: MOCK_PROJECTS.length,
                offset: 0,
                limit: 10,
            };
        }
    }
};

export const getProject = async (contentId: string, queries?: any): Promise<Project> => {
    if (!client) {
        const found = MOCK_PROJECTS.find(p => p.id === contentId);
        if (!found) throw new Error("Project not found");
        return found;
    }
    try {
        return await client.getListDetail<Project>({ endpoint: "projects", contentId, queries });
    } catch (error) {
        try {
            return await client.getListDetail<Project>({ endpoint: "project", contentId, queries });
        } catch (retryError) {
            console.error(`MicroCMS connection failed for project '${contentId}' on both endpoints. Falling back to mock data.`, retryError);
            const found = MOCK_PROJECTS.find(p => p.id === contentId);
            if (!found) throw retryError;
            return found;
        }
    }
}

export const getBlogs = async (queries?: any): Promise<MicroCMSListResponse<Blog>> => {
    if (!client) {
        return {
            contents: MOCK_BLOGS,
            totalCount: MOCK_BLOGS.length,
            offset: 0,
            limit: 10,
        };
    }
    try {
        return await client.getList<Blog>({ endpoint: "blogs", queries });
    } catch (error) {
        console.error("MicroCMS connection failed for endpoint 'blogs'. Falling back to mock data.", error);
        return {
            contents: MOCK_BLOGS,
            totalCount: MOCK_BLOGS.length,
            offset: 0,
            limit: 10,
        };
    }
};

export const getBlog = async (contentId: string, queries?: any): Promise<Blog> => {
    if (!client) {
        const found = MOCK_BLOGS.find(b => b.id === contentId);
        if (!found) throw new Error("Blog not found");
        return found;
    }
    try {
        return await client.getListDetail<Blog>({ endpoint: "blogs", contentId, queries });
    } catch (error) {
        console.error(`MicroCMS connection failed for blog '${contentId}'. Falling back to mock data.`, error);
        const found = MOCK_BLOGS.find(b => b.id === contentId);
        if (!found) throw error;
        return found;
    }
}
export interface Product {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    description: string;
    imageUrl: string;
    content: string;
    videoUrl?: string;
}

const MOCK_PRODUCTS: Product[] = [
    {
        id: "product-1",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        revisedAt: new Date().toISOString(),
        title: "AI Integration Service",
        description: "人の思考に寄り添うAIが、ビジネスの新たな可能性を拓きます。単なる自動化ではなく、想いをカタチにするパートナーとして、持続可能な未来を共創します。",
        content: `
            <h3>Overview</h3>
            <p>
                私たちのAIインテグレーションサービスは、単なるツールの導入に留まりません。
                お客様のビジネスモデルを深く理解し、AIが真に価値を生み出すポイントを見極め、
                最適なソリューションを設計・実装します。
            </p>
            <h3>Service Features</h3>
            <ul>
                <li><strong>Custom AI Models:</strong> 貴社の独自データを用いた専用モデルの開発</li>
                <li><strong>Seamless Integration:</strong> 既存システムへの影響を最小限に抑えたスムーズな連携</li>
                <li><strong>Continuous Improvement:</strong> 運用開始後のモニタリングと継続的な精度向上</li>
            </ul>
        `,
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3",
    },
    {
        id: "xr-development",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        revisedAt: new Date().toISOString(),
        title: "XR Development",
        description: "現実と想像の境界を溶かす、没入型のデジタル体験を。360度の視界で「想い」を伝え、時間や場所を超えた新しい「つながり」を創造します。",
        content: `
            <h3>Overview</h3>
            <p>
                VR（仮想現実）、AR（拡張現実）、MR（複合現実）技術を活用し、驚きと感動を与える没入型コンテンツを開発します。
                製品のバーチャル展示会、没入型トレーニングシステム、エンターテインメントイベントなど、
                リアルでは不可能な体験をデジタルで実現し、ユーザーの記憶に深く刻まれるブランド体験を提供します。
            </p>
            <h3>Service Features</h3>
            <ul>
                <li><strong>Immersive Experience:</strong> 最新のヘッドセットやモバイルデバイスに対応した、圧倒的な没入感のあるVR/ARコンテンツ</li>
                <li><strong>Interactive Design:</strong> 視線やジャスチャーで直感的に操作できる、人間に寄り添ったUI/UX設計</li>
                <li><strong>Business Solutions:</strong> 建築ビジュアライゼーション、教育訓練、遠隔支援など、ビジネス課題を解決する実用的なXR導入</li>
            </ul>
        `,
        imageUrl: "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    },
    {
        id: "product-2",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        revisedAt: new Date().toISOString(),
        title: "Application Development",
        description: "使う人の心を動かす、温かみのあるデジタル体験を。手に取るすべての人に寄り添い、想いが伝わるアプリケーションを開発します。",
        content: `
            <h3>Overview</h3>
            <p>
                ユーザーの課題を解決し、毎日使いたくなるアプリケーションを開発します。
                企画・要件定義からUI/UXデザイン、開発、テスト、ストア公開までワンストップで支援。
                スケーラビリティを考慮したアーキテクチャで、将来の事業拡大にも柔軟に対応します。
            </p>
            <h3>Service Features</h3>
            <ul>
                <li><strong>Cross-Platform Development:</strong> Flutter / React Native 等を用いた効率的なマルチプラットフォーム開発</li>
                <li><strong>Cloud Native Architecture:</strong> AWS / GCP を活用したスケーラブルで堅牢なバックエンド構築</li>
                <li><strong>User-Centric UI/UX:</strong> 徹底したユーザーリサーチに基づいた、使い心地の良いインターフェース</li>
            </ul>
        `,
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    },
    {
        id: "web-production",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        revisedAt: new Date().toISOString(),
        title: "Website Production",
        description: "世界へ届けたい「想い」を、美しいデジタル表現で。ブランドが持つ物語を大切に紡ぎ、世界中の人々と深く繋がるWebサイトを構築します。",
        content: `
            <h3>Overview</h3>
            <p>
                単に美しいだけでなく、ビジネスの成果に直結するWebサイトを制作します。
                ユーザー心理に基づいた設計と、最新の技術トレンドを取り入れた実装で、
                訪問者を顧客へと変える強力なプラットフォームを提供します。
            </p>
            <h3>Service Features</h3>
            <ul>
                <li><strong>Strategic UI/UX Design:</strong> ユーザー体験を第一に考えた、使いやすく美しいデザイン</li>
                <li><strong>Modern Tech Stack:</strong> Next.js, Astroなど最新技術を用いた高速でセキュアな実装</li>
                <li><strong>SEO Optimization:</strong> 検索エンジンでの上位表示を狙う内部対策とコンテンツ設計</li>
            </ul>
        `,
        imageUrl: "/images/webdesign001.jpg",
    },
    {
        id: "content-marketing",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        revisedAt: new Date().toISOString(),
        title: "Content Marketing",
        description: "共感を呼び、人と人の絆を深めるコンテンツを。データを超えた「想い」の共有を通じて、永く愛されるファンコミュニティを育みます。",
        content: `
            <h3>Overview</h3>
            <p>
                情報は発信するだけでは届きません。誰に、何を、どのように伝えるか。
                徹底的なリサーチと戦略設計に基づき、ユーザーの共感を呼ぶコンテンツを制作します。
                顧客ロイヤリティの向上まで、包括的なマーケティング支援を提供します。
            </p>
            <h3>Service Features</h3>
            <ul>
                <li><strong>Multi-Channel Strategy:</strong> Web, SNS(YouTube), メッセンジャー(LINE)を横断した統合アプローチ</li>
                <li><strong>High-Quality Production:</strong> プロのクリエイターによる質の高い記事・動画制作</li>
                <li><strong>Data-Driven Analysis:</strong> 定量データに基づいた効果測定と改善サイクル（PDCA）の徹底</li>
            </ul>
        `,
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    },
    {
        id: "digital-education",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        revisedAt: new Date().toISOString(),
        title: "Digital Education",
        description: "未来の地球を想う、次世代のリーダーたちへ。テクノロジーと共に生きる力を育み、子供たちの無限の「想い」を明日へと繋ぎます。",
        content: `
            <h3>Overview</h3>
            <p>
                テクノロジーの進化と共に、求められるスキルも変化し続けています。
                私たちは、単なる知識の伝達ではなく、自ら考え問題を解決する「実践力」の育成に重点を置いています。
                国際的なロボット競技会「RoboRAVE」の運営支援などを通じて、グローバルに活躍できる人材を育てます。
            </p>
            <h3>Service Features</h3>
            <ul>
                <li><strong>Practical Programming:</strong> 基礎から応用まで、手を動かしながら学ぶ実践的なカリキュラム</li>
                <li><strong>Global Challenge:</strong> 国際ロボット大会（RoboRAVE, WRO）や、鈴鹿Ene-1チャレンジへの参加・運営支援を通じた実践的体験</li>
                <li><strong>AI Literacy:</strong> 生成AIなどの最新技術を安全かつ効果的に活用するためのリテラシー教育</li>
            </ul>
        `,
        imageUrl: "/images/digital-education.svg",
        videoUrl: "/videos/edtec01.mp4",
    },
];

export const getProducts = async (queries?: any): Promise<MicroCMSListResponse<Product>> => {
    if (!client) {
        return {
            contents: MOCK_PRODUCTS,
            totalCount: MOCK_PRODUCTS.length,
            offset: 0,
            limit: 10,
        };
    }
    try {
        return await client.getList<Product>({ endpoint: "products", queries });
    } catch (error) {
        console.error("MicroCMS connection failed for endpoint 'products'. Falling back to mock data.", error);
        return {
            contents: MOCK_PRODUCTS,
            totalCount: MOCK_PRODUCTS.length,
            offset: 0,
            limit: 10,
        };
    }
};

export const getProduct = async (contentId: string, queries?: any): Promise<Product> => {
    if (!client) {
        const found = MOCK_PRODUCTS.find(p => p.id === contentId);
        if (!found) throw new Error("Product not found");
        return found;
    }
    try {
        return await client.getListDetail<Product>({ endpoint: "products", contentId, queries });
    } catch (error) {
        console.error(`MicroCMS connection failed for product '${contentId}'. Falling back to mock data.`, error);
        const found = MOCK_PRODUCTS.find(p => p.id === contentId);
        if (!found) throw error;
        return found;
    }
}
