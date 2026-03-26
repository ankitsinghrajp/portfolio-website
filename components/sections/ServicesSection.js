import React, { useState } from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import services from "@/data/services.json";
import { Brain, Database, Layers, Network, Shapes, ShieldCheck, ArrowUpRight, X } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '../ui/dialog';

const accentMap = {
  Layers:      { color: "blue",   from: "from-blue-500/15",   via: "via-blue-400/10",   to: "to-blue-600/15",   border: "group-hover:border-blue-500/50",   icon: "text-blue-500 dark:text-blue-400",   title: "group-hover:text-blue-600 dark:group-hover:text-blue-400",   badge: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700/50",   dot: "text-blue-500" },
  Brain:       { color: "violet", from: "from-violet-500/15", via: "via-violet-400/10", to: "to-purple-600/15", border: "group-hover:border-violet-500/50", icon: "text-violet-500 dark:text-violet-400", title: "group-hover:text-violet-600 dark:group-hover:text-violet-400", badge: "bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-700/50", dot: "text-violet-500" },
  Network:     { color: "cyan",   from: "from-cyan-500/15",   via: "via-cyan-400/10",   to: "to-sky-600/15",    border: "group-hover:border-cyan-500/50",   icon: "text-cyan-500 dark:text-cyan-400",   title: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400",   badge: "bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700/50",   dot: "text-cyan-500" },
  Database:    { color: "emerald",from: "from-emerald-500/15",via: "via-emerald-400/10",to: "to-green-600/15",  border: "group-hover:border-emerald-500/50",icon: "text-emerald-500 dark:text-emerald-400",title: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",badge: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/50",dot: "text-emerald-500" },
  Shapes:      { color: "pink",   from: "from-pink-500/15",   via: "via-pink-400/10",   to: "to-rose-600/15",   border: "group-hover:border-pink-500/50",   icon: "text-pink-500 dark:text-pink-400",   title: "group-hover:text-pink-600 dark:group-hover:text-pink-400",   badge: "bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-700/50",   dot: "text-pink-500" },
  ShieldCheck: { color: "amber",  from: "from-amber-500/15",  via: "via-amber-400/10",  to: "to-orange-600/15", border: "group-hover:border-amber-500/50",  icon: "text-amber-500 dark:text-amber-400",  title: "group-hover:text-amber-600 dark:group-hover:text-amber-400",  badge: "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-700/50",  dot: "text-amber-500" },
};

const iconMap = { ShieldCheck, Layers, Brain, Network, Database, Shapes };

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [open, setOpen] = useState(false);

  const handleCardClick = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  return (
    <div className="border-dotted py-10 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl pt-5 text-center md:text-5xl pb-2 font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent pr-2">
          My Services
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-8">
          Click any card to explore details
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            const accent = accentMap[service.icon];
            const highlights = [service.highlight1, service.highlight2, service.highlight3, service.highlight4].filter(Boolean);

            return (
              <div key={service.id} className="relative group cursor-pointer" onClick={() => handleCardClick(service)}>
                {/* Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${accent.from} ${accent.via} ${accent.to} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`} />

                <Card className={`relative h-full bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700/60 ${accent.border} rounded-2xl backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg overflow-hidden`}>
                  {/* Top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-current to-transparent ${accent.icon}`} />

                  <CardHeader className="p-5">
                    {/* Icon row */}
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group-hover:scale-110 transition-transform duration-300`}>
                        {Icon && <Icon className={`h-5 w-5 ${accent.icon}`} />}
                      </div>
                      <ArrowUpRight className={`h-4 w-4 text-gray-300 dark:text-gray-600 group-hover:${accent.icon} group-hover:scale-110 transition-all duration-300 mt-1`} />
                    </div>

                    <CardTitle className={`text-[15px] font-semibold text-gray-800 dark:text-gray-100 ${accent.title} transition-colors duration-300 mb-1.5 leading-snug`}>
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-500 dark:text-gray-400 text-[13px] leading-relaxed">
                      {service.description}
                    </CardDescription>

                    {/* Preview tags — first 2 highlights */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {highlights.slice(0, 2).map((h, i) => {
                        const label = h.split(':')[0];
                        return (
                          <span key={i} className={`px-2 py-0.5 text-[11px] font-medium rounded-full border ${accent.badge}`}>
                            {label}
                          </span>
                        );
                      })}
                    </div>
                  </CardHeader>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dialog */}
      {selectedService && (() => {
        const accent = accentMap[selectedService.icon];
        const Icon = iconMap[selectedService.icon];
        const highlights = [
          selectedService.highlight1,
          selectedService.highlight2,
          selectedService.highlight3,
          selectedService.highlight4,
        ].filter(Boolean);

        return (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="dark:bg-[#09090b] bg-white border border-gray-200 dark:border-gray-700 rounded-2xl max-w-lg p-0 overflow-hidden">
              {/* Dialog header band */}
              <div className={`px-6 pt-6 pb-5 border-b border-gray-100 dark:border-gray-800`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700`}>
                    {Icon && <Icon className={`h-5 w-5 ${accent.icon}`} />}
                  </div>
                  <DialogTitle className={`text-lg font-bold text-gray-800 dark:text-gray-100`}>
                    {selectedService.title}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-gray-500 dark:text-gray-400 text-[13.5px] leading-relaxed">
                  {selectedService.dialogDescription}
                </DialogDescription>
              </div>

              {/* Highlights */}
              <div className="px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                  Key Highlights
                </p>
                <ul className="space-y-2.5">
                  {highlights.map((h, i) => {
                    const [label, ...rest] = h.split(':');
                    const value = rest.join(':').trim();
                    return (
                      <li key={i} className="flex items-start gap-2.5 text-[13.5px]">
                        <span className={`mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current ${accent.dot}`} />
                        <span>
                          <span className="font-semibold text-gray-700 dark:text-gray-200">{label}:</span>
                          {value && <span className="text-gray-500 dark:text-gray-400"> {value}</span>}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </DialogContent>
          </Dialog>
        );
      })()}
    </div>
  );
};

export default ServicesSection;