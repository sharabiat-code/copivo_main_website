@@ .. @@
 const colors = {
-  navy: "#0B2545",
+  navy: "#1B4332",
   bg: "#FFFFFF",
-  g1: "#FFC400",
-  g2: "#FF6A00", 
-  g3: "#FF3D5A",
+  g1: "#2D5A3D",
+  g2: "#1B4332", 
+  g3: "#0F2A1F",
   neutral: {
     50: "#fafafa",
     100: "#f4f4f5",
@@ .. @@
   }
 };
 
-const gradient = `linear-gradient(135deg, ${colors.g1}, ${colors.g2}, ${colors.g3})`;
-const subtleGradient = `linear-gradient(135deg, ${colors.g1}15, ${colors.g2}10, ${colors.g3}15)`;
+const gradient = `linear-gradient(135deg, #2D5A3D, #1B4332, #0F2A1F)`;
+const subtleGradient = `linear-gradient(135deg, #2D5A3D15, #1B433210, #0F2A1F15)`;
+const accentGradient = `linear-gradient(135deg, #52B788, #2D5A3D)`;
 
 const Section = ({ 
   id, 
@@ .. @@
         :root { 
-          --fg: #0B2545;
-          --gradient-primary: linear-gradient(135deg, #7a5cff, #ff6ad5);
-          --gradient-accent: linear-gradient(135deg, ${colors.g1}, ${colors.g2}, ${colors.g3});
+          --fg: #1B4332;
+          --gradient-primary: linear-gradient(135deg, #52B788, #2D5A3D);
+          --gradient-accent: linear-gradient(135deg, #2D5A3D, #1B4332, #0F2A1F);
         }
         
         .glass {
           background: rgba(255,255,255,0.85);
           border: 1px solid rgba(255,255,255,0.6);
-          box-shadow: 0 20px 40px rgba(11,37,69,0.08);
+          box-shadow: 0 20px 40px rgba(27,67,50,0.08);
           backdrop-filter: blur(20px);
         }
         
         .btn-primary { 
           background: var(--gradient-primary);
           color: white; 
-          box-shadow: 0 10px 30px rgba(122,92,255,0.3);
+          box-shadow: 0 10px 30px rgba(82,183,136,0.3);
           border: 1px solid rgba(255,255,255,0.2);
         }
         .btn-primary:hover { 
           transform: translateY(-2px);
-          box-shadow: 0 15px 40px rgba(122,92,255,0.4);
+          box-shadow: 0 15px 40px rgba(82,183,136,0.4);
         }
         
         .btn-secondary {
           background: rgba(255,255,255,0.9);
           color: var(--fg);
-          border: 2px solid rgba(11,37,69,0.1);
+          border: 2px solid rgba(27,67,50,0.1);
           backdrop-filter: blur(10px);
         }
         .btn-secondary:hover {
           background: rgba(255,255,255,1);
-          border-color: rgba(11,37,69,0.2);
+          border-color: rgba(27,67,50,0.2);
           transform: translateY(-2px);
         }
         
         .badge { 
-          background: rgba(122,92,255,0.1); 
-          color: #0a2540; 
-          border: 1px solid rgba(122,92,255,0.2);
+          background: rgba(82,183,136,0.1); 
+          color: #1B4332; 
+          border: 1px solid rgba(82,183,136,0.2);
           backdrop-filter: blur(10px);
         }
         
@@ .. @@
         }
         
         .theme-hero { 
-          --fg: #0a2540; 
+          --fg: #1B4332; 
           background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
         }
         
-        .theme-light { --fg: #0B2545; }
+        .theme-light { --fg: #1B4332; }
         
         .theme-grid { 
-          --fg: #0B2545; 
+          --fg: #1B4332; 
           background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);
           background-image: 
-            radial-gradient(circle at 25px 25px, rgba(11,37,69,0.06) 2px, transparent 0),
-            radial-gradient(circle at 75px 75px, rgba(11,37,69,0.04) 2px, transparent 0);
+            radial-gradient(circle at 25px 25px, rgba(27,67,50,0.06) 2px, transparent 0),
+            radial-gradient(circle at 75px 75px, rgba(27,67,50,0.04) 2px, transparent 0);
           background-size: 100px 100px, 100px 100px;
           background-position: 0 0, 50px 50px;
         }
         
         .theme-dark { 
           --fg: #ffffff; 
-          background: linear-gradient(180deg, #0a2540 0%, #071a2d 100%);
+          background: linear-gradient(180deg, #1B4332 0%, #0F2A1F 100%);
         }
         .theme-dark .glass { 
-          background: rgba(15, 25, 40, 0.7); 
+          background: rgba(27, 67, 50, 0.7); 
           border-color: rgba(255,255,255,0.1); 
         }
         
@@ .. @@
         input:focus, textarea:focus {
           outline: none;
-          box-shadow: 0 0 0 3px rgba(122,92,255,0.1);
-          border-color: #7a5cff;
+          box-shadow: 0 0 0 3px rgba(82,183,136,0.1);
+          border-color: #52B788;
         }
         
         @media (prefers-reduced-motion: reduce) {
@@ .. @@
             <motion.div 
               className="inline-flex items-center gap-3 badge px-4 py-2 rounded-full text-sm font-semibold mb-8"
             >
               <Sparkles size={16}/> 
               <span>Practical solutions, zero fluff</span>
               <div className="flex gap-1">
                 {[1,2,3,4,5].map(i => (
-                  <Star key={i} size={12} className="fill-current text-yellow-400" />
+                  <Star key={i} size={12} className="fill-current text-green-500" />
                 ))}
               </div>
             </motion.div>
@@ .. @@
                 <div className="grid grid-cols-3 gap-4 mb-4">
                   {[
-                    { label: "Revenue", value: "↗ 12%", color: "text-green-600" },
-                    { label: "Expenses", value: "↘ 3%", color: "text-blue-600" },
-                    { label: "Profit", value: "↗ 18%", color: "text-emerald-600" }
+                    { label: "Revenue", value: "↗ 12%", color: "text-green-700" },
+                    { label: "Expenses", value: "↘ 3%", color: "text-green-600" },
+                    { label: "Profit", value: "↗ 18%", color: "text-green-800" }
                   ].map((metric, i) => (
                     <div key={metric.label} className="text-center p-3 rounded-xl bg-white">
                       <div className="text-xs opacity-60 mb-1" style={{ color: 'var(--fg)' }}>{metric.label}</div>
@@ .. @@
                 className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 bg-white text-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all" 
+                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 bg-white text-lg focus:border-green-500 focus:ring-4 focus:ring-green-50 transition-all" 
                 placeholder="Your name" 
               />
             </div>
@@ .. @@
               <input 
                 type="email" 
-                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 bg-white text-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all" 
+                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 bg-white text-lg focus:border-green-500 focus:ring-4 focus:ring-green-50 transition-all" 
                 placeholder="you@company.com" 
               />
             </div>
@@ .. @@
               <textarea 
-                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 bg-white min-h-[140px] text-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all resize-vertical" 
+                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 bg-white min-h-[140px] text-lg focus:border-green-500 focus:ring-4 focus:ring-green-50 transition-all resize-vertical" 
                 placeholder="Describe your current pain points: slow month-end close, manual data entry, disconnected systems, unclear metrics..."
               />
             </div>