
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform, animate } from "motion/react";
import { Slider } from "../../components/ui/slider";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import { Calculator, ArrowRight, Download, Clock, Users, DollarSign, TrendingUp } from "lucide-react";

// Counter Component for smooth number transition
function Counter({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
    const nodeRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;

        const controls = animate(0, value, {
            duration: 1.5,
            ease: "easeOut",
            onUpdate(val) {
                node.textContent = `${prefix}${Math.round(val).toLocaleString()}${suffix}`;
            },
        });

        return () => controls.stop();
    }, [value, prefix, suffix]);

    return <span ref={nodeRef} />;
}

export function ROICalculator({ onCalculate }: { onCalculate?: () => void }) {
    // State
    const [employees, setEmployees] = useState([100]);
    const [salary, setSalary] = useState([40]); // Monthly in Man-yen
    const [savedMinutes, setSavedMinutes] = useState([15]);

    // Constants
    const WORK_DAYS_PER_MONTH = 20;
    const MONTHS_PER_YEAR = 12;
    const INITIAL_COST = 450000; // 450,000 JPY

    // Derived Values
    // Hourly Rate = (Salary * 10000) / 160h
    const hourlyRate = (salary[0] * 10000) / 160;

    // Monthly Savings = Employees * (SavedMinutes/60) * HourlyRate * 20days
    const dailySavedHours = (savedMinutes[0] / 60);
    const monthlySavings = employees[0] * dailySavedHours * hourlyRate * WORK_DAYS_PER_MONTH;

    // Annual Savings
    const annualSavings = monthlySavings * MONTHS_PER_YEAR;

    // Payback Period (Months) = InitialCost / MonthlySavings
    const paybackPeriod = monthlySavings > 0 ? (INITIAL_COST / monthlySavings) : 0;
    const paybackText = paybackPeriod < 1
        ? "初月で回収可能"
        : `約${paybackPeriod.toFixed(1)}ヶ月で黒字化`;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (isInView && onCalculate) {
            // Delay slightly to simulate "calculation" or just trigger
            setTimeout(onCalculate, 1000);
        }
    }, [isInView, onCalculate]);

    return (
        <section ref={ref} className="py-16 px-4 w-full">
            <Card className="max-w-4xl mx-auto bg-slate-900/80 border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.1)] backdrop-blur-xl relative overflow-hidden">
                {/* Decorative gradients */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]" />
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]" />

                <CardHeader className="text-center relative z-10">
                    <CardTitle className="text-3xl font-bold text-white flex items-center justify-center gap-3">
                        <TrendingUp className="w-8 h-8 text-cyan-400" />
                        Dynamic ROI Intelligence
                    </CardTitle>
                    <CardDescription className="text-slate-400 text-lg">
                        導入によるコスト削減効果をシミュレーション
                    </CardDescription>
                </CardHeader>

                <CardContent className="grid md:grid-cols-2 gap-12 pt-8 relative z-10">
                    {/* Inputs */}
                    <div className="space-y-8">
                        {/* Employee Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between text-sm">
                                <label className="flex items-center gap-2 text-slate-300 font-medium">
                                    <Users className="w-4 h-4 text-cyan-400" /> 従業員数
                                </label>
                                <span className="font-bold text-white">{employees[0]} 名</span>
                            </div>
                            <Slider
                                value={employees}
                                onValueChange={setEmployees}
                                min={10}
                                max={2000}
                                step={10}
                                className="cursor-pointer"
                            />
                            <div className="flex justify-between text-xs text-slate-500 px-1">
                                <span>10</span>
                                <span>2000</span>
                            </div>
                        </div>

                        {/* Salary Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between text-sm">
                                <label className="flex items-center gap-2 text-slate-300 font-medium">
                                    <DollarSign className="w-4 h-4 text-cyan-400" /> 平均月収
                                </label>
                                <span className="font-bold text-white">{salary[0]} 万円</span>
                            </div>
                            <Slider
                                value={salary}
                                onValueChange={setSalary}
                                min={20}
                                max={150}
                                step={5}
                                className="cursor-pointer"
                            />
                            <div className="flex justify-between text-xs text-slate-500 px-1">
                                <span>20万</span>
                                <span>150万</span>
                            </div>
                        </div>

                        {/* Time Saved Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between text-sm">
                                <label className="flex items-center gap-2 text-slate-300 font-medium">
                                    <Clock className="w-4 h-4 text-cyan-400" /> 1日あたりの検索削減時間
                                </label>
                                <span className="font-bold text-white">{savedMinutes[0]} 分/人</span>
                            </div>
                            <Slider
                                value={savedMinutes}
                                onValueChange={setSavedMinutes}
                                min={5}
                                max={60}
                                step={1}
                                className="cursor-pointer"
                            />
                            <div className="flex justify-between text-xs text-slate-500 px-1">
                                <span>5分</span>
                                <span>60分</span>
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-yellow-400/5 group-hover:bg-yellow-400/10 transition-colors" />
                            <p className="text-sm text-yellow-400/80 font-bold uppercase tracking-wider mb-1">
                                年間削減人件費
                            </p>
                            <div className="text-4xl md:text-5xl font-black text-white tracking-tight flex items-baseline gap-1">
                                <span>¥</span>
                                {isInView && <Counter value={annualSavings} />}
                            </div>
                            <p className="text-xs text-slate-500 mt-2 text-right">
                                ※年間稼働240日計算
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 relative">
                            <p className="text-sm text-cyan-400 font-bold uppercase tracking-wider mb-1">
                                投資回収期間 (ROI)
                            </p>
                            <div className="text-3xl font-bold text-white mb-2">
                                {paybackText}
                            </div>
                            <p className="text-xs text-slate-400">
                                初期導入費用(¥450,000)を
                                <span className="text-white font-bold mx-1">
                                    {Math.ceil(paybackPeriod)}ヶ月
                                </span>
                                で相殺
                            </p>
                        </div>

                        <div className="pt-4">
                            <Button className="w-full h-14 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-lg rounded-full shadow-lg shadow-orange-500/20 group transition-all hover:scale-[1.02]">
                                <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                                詳細な試算レポート（PDF）を受け取る
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}

// Re-export specific components if needed, but here we just export the main ROICalculator
