import React from 'react';
import { HeartPulse, Activity, TrendingUp, History, Bath, Stethoscope, GraduationCap } from 'lucide-react';

export interface ActivityItem {
    title: string;
    desc: string;
    date: string;
    icon: React.ReactNode;
}

export interface HealthStat {
    label: string;
    value: string;
    status: string;
    unit: string;
    icon: React.ReactNode;
    color: string;
}

export interface PetProfile {
    id: string;
    name: string;
    species: string;
    gender: string;
    age: string;
    photo: string;
    breed: string;
    weight: string;
    upcoming: string;
    activities: ActivityItem[];
    health: HealthStat[];
}

export const petProfiles: PetProfile[] = [
    {
        id: 'cola',
        name: '可乐 (Cola)',
        species: '金毛寻回犬',
        gender: '雄性',
        age: '2岁 4个月',
        photo: '/pet-cola.png',
        breed: 'Golden Retriever',
        weight: '28.0 KG',
        upcoming: '年度疫苗接种 (2026-05-20)',
        activities: [
            { title: "高端洗护及SPA服务", desc: "服务技师：张晓华 | 完成度：100%", date: "2026-01-20", icon: <Bath size={20} /> },
            { title: "全项健康体检", desc: "主要结论：一切正常，建议增加户外运动", date: "2025-12-15", icon: <Stethoscope size={20} /> },
            { title: "社交技能入门课程", desc: "表现评分：5.0 | 训练师：李明", date: "2025-11-28", icon: <GraduationCap size={20} /> }
        ],
        health: [
            { label: "心率 (BPM)", value: "88", status: "正常", unit: "bpm", icon: <HeartPulse size={18} />, color: "#ef4444" },
            { label: "呼吸频率", value: "24", status: "稳健", unit: "次/分", icon: <Activity size={18} />, color: "#3b82f6" },
            { label: "日常步数", value: "12.4k", status: "达标", unit: "steps", icon: <TrendingUp size={18} />, color: "#10b981" },
            { label: "睡眠质量", value: "92", status: "极佳", unit: "%", icon: <History size={18} />, color: "#8b5cf6" }
        ]
    },
    {
        id: 'mochi',
        name: '饭团 (Mochi)',
        species: '萨摩耶',
        gender: '雌性',
        age: '1岁 2个月',
        photo: '/pet-mochi.png',
        breed: 'Samoyed',
        weight: '18.5 KG',
        upcoming: '幼犬成长检查 (2026-04-12)',
        activities: [
            { title: "萨摩耶专项爆毛洗护", desc: "服务技师：王大志 | 完成度：100%", date: "2026-01-25", icon: <Bath size={20} /> },
            { title: "幼犬社交引导测试", desc: "表现评分：4.5 | 建议：多接触同类", date: "2026-01-10", icon: <GraduationCap size={20} /> }
        ],
        health: [
            { label: "心率 (BPM)", value: "96", status: "略高", unit: "bpm", icon: <HeartPulse size={18} />, color: "#f59e0b" },
            { label: "呼吸频率", value: "28", status: "活泼", unit: "次/分", icon: <Activity size={18} />, color: "#3b82f6" },
            { label: "日常步数", value: "15.2k", status: "活跃", unit: "steps", icon: <TrendingUp size={18} />, color: "#10b981" },
            { label: "睡眠质量", value: "88", status: "良好", unit: "%", icon: <History size={18} />, color: "#8b5cf6" }
        ]
    },
    {
        id: 'luna',
        name: 'Luna',
        species: '英国短毛猫',
        gender: '雌性',
        age: '3岁 6个月',
        photo: '/pet-luna.png',
        breed: 'British Shorthair',
        weight: '4.5 KG',
        upcoming: '口腔健康检查 (2026-06-15)',
        activities: [
            { title: "全项猫咪体检", desc: "结论：体况评分 5/9，非常健康", date: "2026-01-15", icon: <Stethoscope size={20} /> },
            { title: "牙结石清理服务", desc: "服务技师：刘老师 | 状态：待预约", date: "2026-01-05", icon: <History size={20} /> }
        ],
        health: [
            { label: "心率 (BPM)", value: "120", status: "稳定", unit: "bpm", icon: <HeartPulse size={18} />, color: "#ef4444" },
            { label: "呼吸频率", value: "20", status: "安稳", unit: "次/分", icon: <Activity size={18} />, color: "#3b82f6" },
            { label: "日常步数", value: "2.1k", status: "室内", unit: "steps", icon: <TrendingUp size={18} />, color: "#10b981" },
            { label: "睡眠质量", value: "95", status: "极佳", unit: "%", icon: <History size={18} />, color: "#8b5cf6" }
        ]
    },
    {
        id: 'bao',
        name: '阿宝 (Bao)',
        species: '松狮犬',
        gender: '雄性',
        age: '5岁',
        photo: '/pet-bao.jpg',
        breed: 'Chow Chow',
        weight: '32.0 KG',
        upcoming: '核心疫苗补种 (2026-07-10)',
        activities: [
            { title: "松狮犬皮肤护理", desc: "服务技师：张三 | 完成度：100%", date: "2026-01-18", icon: <Bath size={20} /> },
            { title: "行为心理咨询", desc: "结论：性格稳重，社交意愿中等", date: "2025-12-30", icon: <GraduationCap size={20} /> }
        ],
        health: [
            { label: "心率 (BPM)", value: "82", status: "正常", unit: "bpm", icon: <HeartPulse size={18} />, color: "#ef4444" },
            { label: "呼吸频率", value: "18", status: "平稳", unit: "次/分", icon: <Activity size={18} />, color: "#3b82f6" },
            { label: "日常步数", value: "8.5k", status: "正常", unit: "steps", icon: <TrendingUp size={18} />, color: "#10b981" },
            { label: "睡眠质量", value: "90", status: "良好", unit: "%", icon: <History size={18} />, color: "#8b5cf6" }
        ]
    },
    {
        id: 'kiki',
        name: '琪琪 (Kiki)',
        species: '泰迪/贵宾',
        gender: '雌性',
        age: '1岁',
        photo: '/pet-kiki.jpg',
        breed: 'Toy Poodle',
        weight: '3.5 KG',
        upcoming: '幼犬泪痕护理 (2026-04-01)',
        activities: [
            { title: "泰迪熊造型修剪", desc: "服务技师：美美 | 效果：好评", date: "2026-01-28", icon: <Bath size={20} /> },
            { title: "智力开发课程", desc: "表现评分：5.0 | 训练师：陈老师", date: "2026-01-12", icon: <GraduationCap size={20} /> }
        ],
        health: [
            { label: "心率 (BPM)", value: "110", status: "活跃", unit: "bpm", icon: <HeartPulse size={18} />, color: "#ef4444" },
            { label: "呼吸频率", value: "26", status: "活泼", unit: "次/分", icon: <Activity size={18} />, color: "#3b82f6" },
            { label: "日常步数", value: "14.8k", status: "达标", unit: "steps", icon: <TrendingUp size={18} />, color: "#10b981" },
            { label: "睡眠质量", value: "85", status: "正常", unit: "%", icon: <History size={18} />, color: "#8b5cf6" }
        ]
    }
];
