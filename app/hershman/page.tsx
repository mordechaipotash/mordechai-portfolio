'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Clock, Heart, Check, Briefcase, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

export default function HershmanPage() {
  const { toast } = useToast();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </Link>
          <Badge variant="outline" className="px-3 py-1">
            Healthcare Opportunity
          </Badge>
        </div>
      </div>

      {/* Hero Section - The Personal Story */}
      <div className="max-w-4xl mx-auto px-6 py-12 pt-24">
        <Card className="border-0 shadow-xl bg-white/95 backdrop-blur">
          <CardHeader className="space-y-6 pb-8">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-gray-900">שלום Dr. Hershman!</h1>
              <p className="text-xl text-gray-700">I&apos;m Mordechai - from Beit Shemesh, and I happen to build AI systems</p>
              
              <div className="space-y-1 pt-2">
                <p className="text-lg text-gray-600">When my wife forwarded your message, I wasn&apos;t sure if I could help</p>
                <p className="text-lg text-gray-600">Then I remembered the dental app I built while waiting with my daughter at the orthodontist...</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="px-3 py-1">
                <Clock className="w-3 h-3 mr-1" />
                3-minute read
              </Badge>
              <Badge className="bg-blue-100 text-blue-700 px-3 py-1">
                Community Connection
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* The Waiting Room Story */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Heart className="w-6 h-6 text-red-500" />
                סיעתא דשמיא - Divine Providence
              </h2>
              
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                <CardContent className="pt-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <span className="font-semibold text-lg">October 2024</span> - I&apos;m sitting in Meuchedet Beit Shemesh with my daughter Shifra, 
                    waiting for her orthodontist appointment. She needs braces, and we&apos;ve just had her X-rays taken.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    I&apos;m involved in AI automation, and I just happened to build a dental imaging analysis system 
                    because I had all these core X-rays and images and I just wanted to try and understand them. 
                    I&apos;m quite competent with Python so I just found Python libraries that radiologists use 
                    to understand the details and I just analyzed these things and then made this quick report 
                    which I was going to give to the dentists but ended up leaving in a big hurry and not actually using it.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed font-medium">
                    When I saw your WhatsApp message, I immediately went into my archives and found the app again. 
                    So here it is below.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* The Dental Report */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Here is the report I created with Python:</h2>
              
              <Card className="overflow-hidden border-2 border-blue-200">
                <CardContent className="p-0">
                  <iframe 
                    src="/report.html" 
                    className="w-full h-[800px] border-0 rounded-lg"
                    title="Dental Clinical Report"
                  />
                </CardContent>
              </Card>
            </div>

            <Separator />

            {/* Closing Message */}
            <div className="space-y-4">
              <Card className="bg-gradient-to-r from-gray-50 to-white border-gray-200">
                <CardContent className="pt-6 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    My wife forwarded me your WhatsApp message because she knows I specialize in AI automation across diverse areas including healthcare. 
                    While I don&apos;t have all the details about your specific needs, I can already see several exciting possibilities.
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-gray-700 font-semibold">A few questions that come to mind:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Are you looking to automate patient intake and treatment planning, or is this more about analyzing imaging data in real-time?</li>
                      <li>• How are you currently handling the integration between your 3D printing workflows and patient records?</li>
                      <li>• Would you benefit from an AI system that could pre-screen X-rays and flag potential issues before the appointment?</li>
                      <li>• Are you dealing with insurance claim automation, or is that already solved?</li>
                    </ul>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    I think there&apos;s tremendous potential here, and I&apos;d love to learn more about your vision for the practice.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact */}
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Get in Touch</h3>
                  <p className="text-blue-50">
                    I&apos;ve been deeply involved in freelance full stack development lately, with Python as my primary language of choice. 
                    My specialty is AI automation - I build serverless Python scripts that deploy to cloud infrastructure and interact 
                    seamlessly with databases. I have extensive experience working with all the major large language models 
                    (GPT, Claude, Gemini, etc.) and integrating them into production systems.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
                    <Button 
                      className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                      onClick={() => {
                        navigator.clipboard.writeText('mordechaipotash@gmail.com');
                        toast({
                          title: "✅ Copied!",
                          description: "Email address copied to clipboard",
                          duration: 2000,
                        });
                      }}
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Copy my email address
                    </Button>
                    <Link href="/">
                      <Button 
                        variant="outline"
                        className="bg-transparent text-white border-white border-2 hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                      >
                        <Briefcase className="w-5 h-5 mr-2" />
                        View Full Portfolio
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}