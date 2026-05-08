"use client";

import { useState, useEffect } from "react";
import{ useRouter } from "next/navigation";

export default function AuditPage() {
    const router = useRouter();

    const [formData,setFormData] = useState( {
        tool : "ChatGPT",
        plan : "Plus",
        monthlySpend: "",
        seats: "", 
        teamSize: "", 
        useCase: "Coding",
    });

    // Load saved data
    useEffect(() => {
        const savedData = localStorage.getItem("auditData");

        if(savedData) {
            setFormData(JSON.parse(savedData));
        }
    },[]);

    // Save data automtically 
    useEffect(() => {
        localStorage.setItem("auditData", JSON.stringify(formData));
    }, [formData]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        router.push("/result");
    };

    return (
        <main className="min-h-screen p-10 max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">
                AI Spend Audit
            </h1>

            <div className="space-y-5">

                <div>
                    <label className="block mb-2 font-medium">
                        Tool
                    </label>

                    <select
                    name="Tool"
                    value= {formData.tool}
                    onChange={handleChange}
                    className= "w-full border p-3 rounded-lg"
                    >
                        <option> ChatGPT</option>
                        <option> Claude</option>
                        <option> GitHub Copilot</option>
                        <option> Cursor</option>
                    </select>
                </div>
                <div>
                    <label className="block mob-2 font-medium">
                        Plan
                    </label>

                    <select
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-lg"
                    >
                        <option>Plus</option>
                        <option>Team</option>
                        <option>Enterprise</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-2 font-medium">
                        Monthly Spend($)
                    </label>

                    <input
                        type="number" 
                        name = "monthlySpend"
                        value = {formData.monthlySpend}
                        onChange={handleChange}
                        className="w-full border  p-3 rounded-lg"
                        />
                </div>

                <div>
                    <label className = "block mb-2 font-medium">
                        Seats
                    </label>

                    <input 
                        type="number"
                        name="seats"
                        value={formData.seats}
                        onChange = {handleChange}
                        className = "w-full border p-3 rounded-ig"
                    />
                </div>

                <div>
                    <label className = "block mb-2 font-medium">
                        Team Size
                    </label>

                    <input 
                        type="number" 
                        name = "teamSize"
                        value={formData.teamSize}
                        onChange={handleChange}
                        className = "w-full border p-3 rounded-lg"    
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">
                        Primary Use Case
                    </label>

                    <select
                        name= "useCase"
                        value = {formData.useCase}
                        onChange ={handleChange}
                        className = "w-full border p-3 rounded-lg"
                        >
                            <option>Coding</option>
                            <option>Writing</option>
                            <option>Research</option>
                            <option>Data</option>
                            <option>Mixed</option>
                        </select>
                </div>

                <button
                onClick= {handleSubmit}
                className = "bg-black text-white px-6 py-3 rounded-xl w-full"
                >
                    Generate Audit
                </button>
            </div>
        </main>
    );
}