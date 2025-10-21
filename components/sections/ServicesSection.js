import React, { useState } from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import services from "@/data/services.json";
import { Brain, Database, Layers, Network, Shapes, ShieldCheck } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '../ui/dialog';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [open, setOpen] = useState(false);

  const iconMap = {
    ShieldCheck,
    Layers,
    Brain,
    Network,
    Database,
    Shapes,
  };

  const handleCardClick = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  return (
    <div className="border-dotted py-5 border-b border-gray-600">
      <div className="container mx-auto">
        <h2 className="text-4xl pt-5 text-center md:text-5xl pb-5 font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent pr-2">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
          {services.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <div key={service.id} className="relative group mx-4 my-2">
                {/* Gradient glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                <Card
                  className="relative hover:cursor-pointer bg-slate-300 border border-gray-400 dark:border-gray-700 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl group-hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105"
                  onClick={() => handleCardClick(service)}
                >
                  <CardHeader className="text-center">
                    <h2 className="flex justify-center items-center py-2">
                      {Icon && (
                        <Icon className="h-10 w-10 dark:text-blue-500 text-blue-700 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                      )}
                    </h2>
                    <CardTitle className="text-xl font-semibold mb-2 dark:text-gray-100 text-gray-800 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {selectedService && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="dark:bg-[#09090b] bg-blue-100 border border-gray-600 dark:border-gray-700">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg blur-xl"></div>
              <div className="relative">
                <DialogTitle className="text-2xl dark:text-gray-200 text-gray-800 font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  {selectedService.dialogTitle}
                </DialogTitle>
                <DialogDescription className="dark:text-gray-400 text-gray-800 text-md mt-3">
                  {selectedService.dialogDescription}
                </DialogDescription>
                <h1 className="text-2xl dark:text-gray-200 text-gray-800 font-bold mt-6 mb-3">
                  {selectedService.keyHighlights}
                </h1>
                <div className="space-y-2">
                  <h2 className="dark:text-gray-400 text-gray-800 text-md flex items-start gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    <span className="text-blue-500 mt-1">•</span>
                    {selectedService.highlight1}
                  </h2>
                  <h2 className="dark:text-gray-400 text-gray-800 text-md flex items-start gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    <span className="text-blue-500 mt-1">•</span>
                    {selectedService.highlight2}
                  </h2>
                  <h2 className="dark:text-gray-400 text-gray-800 text-md flex items-start gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    <span className="text-blue-500 mt-1">•</span>
                    {selectedService.highlight3}
                  </h2>
                  <h2 className="dark:text-gray-400 text-gray-800 text-md flex items-start gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    <span className="text-blue-500 mt-1">•</span>
                    {selectedService.highlight4}
                  </h2>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default ServicesSection