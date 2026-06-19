export default function StatBand() {
  const stats = [
    { num: "₹2,999", label: "Website starting price" },
    { num: "48 hrs", label: "Average delivery" },
    { num: "₹0", label: "Monthly fees / hosting" },
    { num: "100%", label: "Done for you digital setup" },
  ];

  return (
    <div className="bg-slate-50 border-y border-slate-200/60 py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="font-head font-extrabold text-2xl md:text-3xl text-primary leading-tight mb-1 animate-fadeIn">
                {stat.num}
              </div>
              <div className="text-xs md:text-sm text-slate-500 font-medium max-w-[150px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
