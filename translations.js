const translations = {
  en: {
    // Nav
    nav: {
      intro: "Introduction",
      bodymap: "Body Map",
      timeline: "Timeline",
      deepdive: "Deep Dives",
      personal: "Make It Yours"
    },
    // Hero
    hero: {
      label: "The Gut-Brain Axis",
      title: "Listen to Your<br>Gut",
      subtitle: "What you eat, how you stress, and the trillions of microbes inside you are sending signals to your brain right now — through three pathways running at wildly different speeds. This is your body's conversation. Learn to read it.",
      cta: "Explore the Map"
    },
    // Body Map
    bodymap: {
      vagal: "Vagal Pathway",
      vagal_speed: "Milliseconds — near-instant",
      vagal_desc: "Neuropod cells and EC cell serotonin signal directly via the vagus nerve.",
      circulatory: "Circulatory Pathway",
      circ_speed: "Minutes to hours",
      circ_desc: "SCFAs enter the bloodstream and cross the blood-brain barrier via MCT transporters.",
      immune: "Immune Pathway",
      immune_speed: "Hours to days",
      immune_desc: "Cytokines and inflammatory signals travel via the bloodstream and modulate brain function.",
      
      svg_brain: "Brain",
      svg_brain_sub: "NTS → DRN → Prefrontal Cortex",
      svg_gut: "Gut",
      svg_gut_sub: "EC cells · Microbiome · Neuropods",

      detail_default_title: "Tap a region to explore",
      detail_default_body: "Select any glowing region on the body map to learn how signals travel between gut and brain. Each pathway operates at dramatically different speeds.",
      
      detail_brain_title: "The Receiving End",
      detail_brain_body: "Gut signals arrive at the <strong>nucleus tractus solitarius (NTS)</strong> in the brainstem, which relays to the <strong>dorsal raphe nucleus</strong> (mood), <strong>locus coeruleus</strong> (alertness), and the <strong>amygdala, hippocampus, and prefrontal cortex</strong> — shaping emotions, memory, and decision-making.",
      detail_brain_cite: "Correlation observed in published studies — not proof of direct causation in humans.",

      detail_vagus_title: "The Vagus Highway",
      detail_vagus_body: "The longest cranial nerve, the <strong>vagus</strong>, carries signals at <strong>~1–18 m/s</strong> depending on fiber type (C-fibers to Aδ). Neuropod cells in the duodenum form <strong>direct glutamatergic synapses</strong> with vagal neurons, enabling millisecond neurotransmission — far faster than hormonal signaling. EC cells release <strong>serotonin via TPH1</strong>, activating vagal 5-HT3 receptors.",
      detail_vagus_cite: "Kaelberer et al., Science 2018; Int J Mol Sci 2025 — neuropod synaptic transduction and EC-vagal serotonin.",

      detail_gut_title: "The Microbial Factory",
      detail_gut_body: "Your colon hosts trillions of bacteria that ferment dietary fiber into <strong>short-chain fatty acids (SCFAs)</strong> — acetate, propionate, and butyrate. These metabolites upregulate <strong>TPH1</strong> to boost serotonin production and enter the bloodstream, eventually crossing the blood-brain barrier via <strong>MCT transporters</strong> on brain endothelial cells.",
      detail_gut_cite: "Int J Mol Sci 2023 (PMC10606032); Frontiers in Endocrinology 2020 — SCFA transport and BBB crossing."
    },
    // Timeline
    timeline: {
      label: "Your 30-Day Story",
      title: "Watch the Lag",
      desc: "Drag the scrubber. The food behind you changes. Vagal signals fire in milliseconds, but downstream effects on mood take longer. SCFA levels shift over hours. Immune-inflammatory responses may not peak for 1–3 days. Watch the lag unfold.",
      correlation: "Simulated data for illustration. Correlations do not imply causation.",
      
      bar_vagal: "Vagal",
      bar_circ: "Circulatory",
      bar_immune: "Immune",
      bar_mood: "Mood",

      day_prefix: "Day",

      // Events
      ev_baseline: "Baseline",
      ev_fiber_starts: "High-fiber diet starts",
      ev_fiber: "High-fiber diet",
      ev_sustained_fiber: "Sustained fiber",
      ev_work_stress: "Work stress spike",
      ev_acute_stress: "Acute stress",
      ev_stress_cont: "Stress continues",
      ev_stress_easing: "Stress easing",
      ev_fermented_add: "Fermented foods added",
      ev_fermented_fiber: "Fermented + fiber",
      ev_diverse_diet: "Diverse diet",
      ev_stable_routine: "Stable routine",
      ev_social_event: "Social event (alcohol)",
      ev_recovery: "Recovery",
      ev_recovery_begins: "Recovery begins",
      ev_full_recovery: "Full recovery",
      ev_meditation: "Meditation added",
      ev_mind_gut: "Mind-gut practice",
      ev_peak_wellness: "Peak wellness",

      // Foods
      food_baseline: "Standard mixed diet",
      food_fiber: "High-fiber: whole grains, legumes, vegetables",
      food_junk1: "Stress eating: comfort food, fast food",
      food_fermented: "Fermented foods: kimchi, sauerkraut, yogurt",
      food_balanced: "Balanced routine diet",
      food_junk2: "Social event: alcohol, rich foods",
      food_recovery: "Recovery: light, nourishing meals",
      food_optimized: "Optimized: fiber + fermented + mindful eating",

      // Insights
      in_rest_label: "Resting State",
      in_rest_body: "Your three pathways are in a <strong>neutral resting state</strong>. Vagal tone is moderate, SCFA production is steady from your current diet, and inflammatory markers are low. This is your baseline — the body you're starting with.",
      in_rest_detail: "With a standard mixed diet, your gut microbiome produces a moderate level of short-chain fatty acids. No acute stressors are driving immune activation.",
      
      in_fiber_label: "Fiber Is Feeding Your Microbiome",
      in_fiber_body: "You just switched to high-fiber. Your <strong>vagal pathway lit up almost immediately</strong> — neuropods in the gut are detecting the new nutrient profile and signaling the brain. But SCFA production hasn't caught up yet. Your gut bacteria need time to ramp up fermentation.",
      in_fiber_detail: "Vagal signaling responds to nutrients within minutes via glutamatergic synapses. SCFAs from fiber fermentation take hours to days to accumulate. The lag between eating fiber and feeling the full cognitive benefit starts here.",

      in_scfa_label: "SCFAs Are Building",
      in_scfa_body: "A few days in, your gut bacteria are now <strong>producing more SCFAs</strong> — butyrate, acetate, propionate. These metabolites are crossing your blood-brain barrier via MCT transporters, supporting BBB integrity and beginning to modulate microglial activity. <strong>Mood is trending up.</strong>",
      in_scfa_detail: "This is the circulatory pathway kicking in. Notice the 1-day lag between diet quality and the circulatory bar. Your immune pathway is also calming — a well-fed microbiome strengthens the gut barrier, reducing inflammatory translocation.",

      in_stress_hit_label: "Stress Just Hit",
      in_stress_hit_body: "A work stress spike just arrived. Your <strong>vagal tone dropped immediately</strong> — the vagus nerve is bidirectional, and stress suppresses its calming signals. But here's the key: your <strong>immune pathway hasn't reacted yet</strong>. The inflammatory damage is coming, but it's 1–3 days away.",
      in_stress_hit_detail: "The HPA axis activates, increasing cortisol and intestinal permeability. Stress also shifts eating patterns toward comfort food, reducing fiber intake. The immune cascade hasn't started yet — watch the red bar over the next few days.",

      in_stress_lag_label: "The Lag Is Becoming Visible",
      in_stress_lag_body: "Stress is ongoing. <strong>Vagal and circulatory pathways are both suppressed</strong> — less fiber in the diet means less SCFA production. Now watch the immune bar: it's <strong>rising</strong>. Cytokines like TNF-α and IL-6 are beginning to circulate. This is yesterday's stress showing up in today's body.",
      in_stress_lag_detail: "This is the 1–3 day lag in action. The gut barrier weakened under stress, allowing bacterial LPS to translocate. Your brain won't feel the full inflammatory impact until these cytokines cross into the CNS — which is happening right now.",

      in_stress_ease_label: "Stress Is Easing, But Inflammation Peaks",
      in_stress_ease_body: "The stressor is subsiding, but your <strong>immune pathway is at its highest point</strong>. This is the most counterintuitive moment: you feel less stressed, but the inflammatory cascade from days ago is <strong>peaking in your brain right now</strong>. Mood is still low.",
      in_stress_ease_detail: "This delayed immune peak is why people often get sick after a stressful period, not during it. The vagal pathway is beginning to recover, but inflammatory cytokines take time to clear. Your mood bar reflects this compound lag.",

      in_ferm_label: "Fermented Foods Enter the Mix",
      in_ferm_body: "You've added <strong>kimchi, sauerkraut, and yogurt</strong> alongside fiber. This introduces live probiotic bacteria directly into your gut — a shortcut to microbiome diversity. Your vagal tone is responding quickly. SCFA production will ramp up faster this time.",
      in_ferm_detail: "Fermented foods provide both prebiotic fiber and probiotic organisms. Some strains produce SCFAs directly, bypassing the slower fermentation process. The circulatory pathway should respond faster than with fiber alone.",

      in_recover_comp_label: "The Recovery Compounds",
      in_recover_comp_body: "All three pathways are <strong>trending in the right direction</strong>. Vagal tone is high, SCFAs are building, and the immune pathway is finally calming down. This is what recovery looks like — not instant, but layered. Each pathway recovers at its own speed.",
      in_recover_comp_detail: "Notice the circulatory bar recovering about a day after the diet improved, and the immune bar lagging further behind. Your mood is climbing as the compound effect of all three pathways aligning becomes apparent.",

      in_rhythm_label: "Finding Your Rhythm",
      in_rhythm_body: "A balanced routine is establishing. All signals are steady. This is what a <strong>well-regulated gut-brain axis looks like</strong> — not a single dramatic peak, but consistent, layered support across all three pathways.",
      in_rhythm_detail: "Sustained dietary patterns matter more than single meals. After about 2 weeks of consistent fiber and fermented foods, your microbiome composition itself begins to shift — not just its output.",

      in_social_label: "A Night Out Disrupts the Pattern",
      in_social_body: "Alcohol and rich foods hit the system. <strong>Vagal tone drops sharply</strong> — alcohol directly impairs vagal signaling. The gut barrier takes a hit. You'll feel the mood dip today, but the <strong>immune response won't arrive for 1–2 days</strong>.",
      in_social_detail: "Alcohol increases intestinal permeability (\"leaky gut\") and disrupts the microbiome within hours. The circulatory pathway slows as SCFA-producing bacteria are suppressed. This is a mini-replay of the stress spike — same lag, same pattern.",

      in_recover_fast_label: "Recovering — Faster This Time",
      in_recover_fast_body: "You're bouncing back, and <strong>the recovery is faster than before</strong>. Your microbiome has more resilience now from the weeks of fiber and fermented foods. The vagal pathway rebounds first, then circulatory, then immune — same order, shorter lag.",
      in_recover_fast_detail: "A more diverse microbiome recovers faster from acute disruption. This is one of the key benefits of sustained dietary investment — not preventing every dip, but reducing recovery time.",

      in_peak_label: "Peak: Mind and Gut Aligned",
      in_peak_body: "Meditation is added to the mix. <strong>All three pathways are at their 30-day high.</strong> Vagal tone is strong (meditation directly stimulates the vagus nerve via slow breathing), SCFAs are abundant, and inflammatory markers are at their lowest. This is what your gut-brain axis looks like when everything is working together.",
      in_peak_detail: "The combination of dietary fiber, fermented foods, and vagal-stimulating practices like meditation creates a positive feedback loop across all three pathways. Each one reinforces the others. This is the state a personalized version of this map would help you find and maintain."
    },
    // Deep Dives
    deepdives: {
      label: "Three Mechanisms",
      title: "The Deep Dives",
      desc: "Each pathway tells a different story about how your body's inner world reaches your brain. Tap to explore the science behind each one.",
      explore: "Explore mechanism",

      vagal_num: "01",
      vagal_title: "The Neuropod Express",
      vagal_body: "Neuropod cells form direct glutamatergic synapses with vagal neurons, transmitting nutrient signals to the brain in milliseconds. A second colonic neuropod circuit uses TLR5 to sense bacterial flagellin and release PYY to regulate feeding. EC cells amplify with serotonin via TPH1.",
      vagal_cite: "Kaelberer et al., Science 2018; Bohórquez, Kaelberer et al., Nature 2025",

      circ_num: "02",
      circ_title: "The Metabolite River",
      circ_body: "Gut bacteria ferment dietary fiber into SCFAs — acetate, propionate, and butyrate. These metabolites ride the bloodstream and cross the blood-brain barrier through MCT transporters on brain endothelial cells, influencing neuroinflammation and neurotransmitter levels.",
      circ_cite: "J Neuroinflammation 2025; Frontiers in Endocrinology 2020",

      immune_num: "03",
      immune_title: "The Slow Burn",
      immune_body: "When gut barrier integrity weakens — from stress, poor diet, or dysbiosis — bacterial components like LPS translocate into the bloodstream, triggering cytokine cascades (TNF-α, IL-6) that reach the brain over hours to days, associated with changes in mood and cognition.",
      immune_cite: "Cell Reports Medicine 2025; Nature 2024",

      // Modal
      modal_label: "Deep Dive",
      modal_disclaimer: "All associations described are based on published peer-reviewed research. Observed correlations in model systems; human mechanistic confirmation varies by pathway.",
      
      vagal_step1_label: "STEP 1",
      vagal_step1_title: "Neuropod Synaptic Sensing (Duodenum)",
      vagal_step1_body: "In the <strong>duodenum</strong>, specialized enteroendocrine cells called <strong>neuropods</strong> form direct synapses with vagal afferent neurons. When nutrients like sugars arrive, neuropods transduce luminal signals in <strong>milliseconds</strong> using <strong>glutamate</strong> as a fast neurotransmitter — far quicker than hormonal diffusion. <em>(Kaelberer et al., Science, 2018)</em>",
      
      vagal_step2_label: "STEP 2",
      vagal_step2_title: "The Neurobiotic Sense (Colon)",
      vagal_step2_body: "A distinct circuit operates in the <strong>colon</strong>. PYY-labeled colonic neuropod cells express <strong>TLR5</strong>, a pattern-recognition receptor. When gut bacteria shed <strong>flagellin</strong> (a structural protein on motile bacterial tails), TLR5 activation triggers <strong>PYY release</strong> onto NPY2R vagal nodose neurons, reducing feeding behavior. This is a separate mechanism from the duodenal glutamatergic synapse. <em>(Bohórquez, Kaelberer et al., Nature, 2025)</em>",
      
      vagal_step3_label: "STEP 3",
      vagal_step3_title: "Serotonin Amplification",
      vagal_step3_body: "Enterochromaffin (EC) cells synthesize <strong>more than 90% of the body's serotonin</strong> via the enzyme <strong>TPH1</strong>. Released serotonin activates <strong>5-HT3 receptors</strong> on vagal afferent fibers (conducting at <strong>~1–18 m/s</strong> depending on C-fiber vs. Aδ-fiber type), amplifying the neural signal to the brainstem's NTS. <em>(Int J Mol Sci, 2025; PMC11818468)</em>",
      
      vagal_step4_label: "STEP 4",
      vagal_step4_title: "Brain Integration",
      vagal_step4_body: "The NTS relays signals to the <strong>dorsal raphe nucleus</strong> (mood regulation), <strong>locus coeruleus</strong> (alertness), and higher regions including the <strong>amygdala</strong>, <strong>hippocampus</strong>, and <strong>prefrontal cortex</strong> — associated with changes in emotion, memory, and appetite. Note: while vagal neural transmission is fast (milliseconds), downstream behavioral and mood effects emerge over longer timescales.",

      circ_step1_label: "STEP 1",
      circ_step1_title: "Bacterial Fermentation",
      circ_step1_body: "Gut bacteria ferment dietary fiber into <strong>short-chain fatty acids (SCFAs)</strong> — primarily acetate (C2), propionate (C3), and butyrate (C4). This process takes hours after a fiber-rich meal. <em>(Int J Mol Sci, 2023; PMC10606032)</em>",
      
      circ_step2_label: "STEP 2",
      circ_step2_title: "Absorption & Transport",
      circ_step2_body: "SCFAs are absorbed by colonocytes through <strong>monocarboxylate transporters (MCT-1)</strong> and sodium-coupled MCTs (SMCT-1). Most are used locally for energy; some enter the <strong>portal circulation</strong>. <em>(Frontiers in Endocrinology, 2020)</em>",
      
      circ_step3_label: "STEP 3",
      circ_step3_title: "Crossing the Blood-Brain Barrier",
      circ_step3_body: "Brain microvascular endothelial cells express <strong>MCT transporters</strong> that allow SCFAs to cross the BBB. Injection of radiolabeled (<sup>14</sup>C) SCFAs into the carotid artery confirmed brain uptake in rat models. In a separate study, SCFA receptors (FFAR2/3) were found to be expressed in the mouse brain, with over 60% of FFAR3 mRNA in the hippocampus co-localizing with activated microglia. <em>(Frontiers in Endocrinology, 2020; J Neuroinflammation, 2025; PMC12093714)</em>",
      
      circ_step4_label: "STEP 4",
      circ_step4_title: "Neuromodulation",
      circ_step4_body: "Once in the brain, SCFAs modulate <strong>microglial activation</strong>, enhance <strong>BBB integrity</strong> via tight junction proteins (occludin, claudin-5), and regulate <strong>neurotransmitter levels</strong>. Butyrate acts as an HDAC inhibitor, influencing gene expression in brain cells through epigenetic mechanisms. <em>(J Neuroinflammation, 2025; PMC12093714)</em>",

      immune_step1_label: "STEP 1",
      immune_step1_title: "Barrier Disruption",
      immune_step1_body: "Stress, poor diet, or microbial imbalance can compromise the <strong>intestinal epithelial barrier</strong>. When permeability increases, bacterial components like <strong>lipopolysaccharide (LPS)</strong>, peptidoglycan, and flagellin translocate into the bloodstream.",
      
      immune_step2_label: "STEP 2",
      immune_step2_title: "Immune Activation",
      immune_step2_body: "Translocated bacterial products trigger innate immune cells to release <strong>pro-inflammatory cytokines</strong> — including <strong>TNF-α</strong>, <strong>IL-6</strong>, and <strong>IL-1β</strong>. The HPA axis activates, amplifying the stress response and further increasing intestinal permeability.",
      
      immune_step3_label: "STEP 3",
      immune_step3_title: "Cytokine Signaling to the Brain",
      immune_step3_body: "Circulating cytokines access the brain through <strong>circumventricular organs</strong>, the <strong>choroid plexus</strong>, and vagal afferent pathways. Peripheral monocytes and T cells can also migrate into the meninges and cerebrospinal fluid.",
      
      immune_step4_label: "STEP 4",
      immune_step4_title: "Neuroinflammatory Response",
      immune_step4_body: "In the brain, cytokines activate <strong>microglia</strong>, shifting them toward a pro-inflammatory (M1) phenotype. This is associated with altered synaptic function, changes in neurotransmitter metabolism, and behavioral effects — a process that unfolds over <strong>hours to days</strong>."
    },
    // Personal Section
    personal: {
      label: "This Becomes You",
      title: "Your Body,<br>Your Signals",
      desc: "Everything above is published science. But your vagal timing isn't average. Your immune lag is uniquely yours. Here's how this map starts learning your body.",
      
      step1_title: "Connect Your Signals",
      step1_body: "Pair a wearable to stream heart rate variability, sleep quality, and stress markers — data the vagal pathway would love.",
      
      step2_title: "Log in 30 Seconds",
      step2_body: "A quick daily check-in: what you ate, how your gut feels, your mood. Two taps and a slider. The model starts learning your personal lag times.",
      
      step3_title: "Watch It Learn",
      step3_body: "Over days and weeks, the map brightens and dims based on your body's own data. Your patterns emerge — unique timing, sensitivities, and rhythms.",
      
      phone_title: "Today's Log",
      p_fiber: "Fiber intake",
      v_fiber: "High",
      p_gut: "Gut comfort",
      v_gut: "7/10",
      p_mood: "Mood",
      v_mood: "Good",
      p_sleep: "Sleep (HRV)",
      v_sleep: "52ms",
      p_stress: "Stress",
      v_stress: "Low"
    },
    // Footer
    footer: {
      disclaimer: "All scientific claims reference Tier 1 peer-reviewed publications. Correlational language is used throughout — observed associations do not establish direct causation in humans. This visualization is educational, not medical advice.",
      sources: "Key Sources:"
    }
  },
  
  zh: {
    // Nav
    nav: {
      intro: "简介",
      bodymap: "人体图谱",
      timeline: "时间线",
      deepdive: "深度探索",
      personal: "个性化定制"
    },
    // Hero
    hero: {
      label: "肠脑轴 (The Gut-Brain Axis)",
      title: "倾听你的<br>肠道",
      subtitle: "你的饮食、压力状态以及体内数以万亿计的微生物，此刻正通过三条速度截然不同的通路向你的大脑发送信号。这是你身体内部的对话。学着读懂它。",
      cta: "探索图谱"
    },
    // Body Map
    bodymap: {
      vagal: "迷走神经通路 (Vagal Pathway)",
      vagal_speed: "毫秒级 — 几乎瞬间",
      vagal_desc: "神经足细胞 (Neuropod cells) 和嗜铬细胞 (EC cells) 分泌的血清素直接通过迷走神经传递信号。",
      circulatory: "循环系统通路 (Circulatory Pathway)",
      circ_speed: "几分钟至几小时",
      circ_desc: "短链脂肪酸 (SCFAs) 进入血液并在此后通过 MCT 转运蛋白穿过血脑屏障。",
      immune: "免疫通路 (Immune Pathway)",
      immune_speed: "几小时至几天",
      immune_desc: "细胞因子 (Cytokines) 和炎症信号通过血液传播并调节大脑功能。",
      
      svg_brain: "大脑",
      svg_brain_sub: "孤束核 (NTS) → 背侧中缝核 (DRN) → 前额叶皮层",
      svg_gut: "肠道",
      svg_gut_sub: "嗜铬细胞 · 微生物组 · 神经足细胞",

      detail_default_title: "点击任意区域进行探索",
      detail_default_body: "在人体图谱上选择任何发光的区域，以了解信号如何在肠道和大脑之间传输。每条通路的运作速度都有天壤之别。",
      
      detail_brain_title: "接收端",
      detail_brain_body: "肠道信号到达脑干的<strong>孤束核 (NTS)</strong>，随后传递给<strong>背侧中缝核</strong>（调节情绪）、<strong>蓝斑核</strong>（调节警觉性）以及<strong>杏仁核、海马体和前额叶皮层</strong> —— 这些区域共同塑造着我们的情绪、记忆和决策能力。",
      detail_brain_cite: "注：此类相关性在已发表的研究中被观察到，但不代表人类直接的因果关系。",

      detail_vagus_title: "迷走神经高速路",
      detail_vagus_body: "最长的脑神经——<strong>迷走神经 (Vagus)</strong>，携带信号的速度为 <strong>~1-18 m/s</strong>（取决于神经纤维的类型，如C纤维或Aδ纤维）。十二指肠中的神经足细胞与迷走神经元形成<strong>直接的谷氨酸能突触</strong>，实现毫秒级的神经递质传输——远远快于激素传递。嗜铬细胞 (EC cells) <strong>通过 TPH1 酶释放血清素</strong>，从而激活迷走神经的 5-HT3 受体。",
      detail_vagus_cite: "Kaelberer et al., Science 2018; Int J Mol Sci 2025 — 神经足细胞的突触传导及EC细胞-迷走神经血清素通讯。",

      detail_gut_title: "微生物工厂",
      detail_gut_body: "你的结肠里存在数以万亿计的细菌，它们将膳食纤维发酵成<strong>短链脂肪酸 (SCFAs)</strong>——即乙酸、丙酸和丁酸。这些代谢产物能上调 <strong>TPH1</strong> 酶的表达以促进血清素的产生，并进入血液，最终通过脑内皮细胞上的 <strong>MCT 转运蛋白</strong>到达血脑屏障。",
      detail_gut_cite: "Int J Mol Sci 2023 (PMC10606032); Frontiers in Endocrinology 2020 — SCFA 运输及血脑屏障穿越。"
    },
    // Timeline
    timeline: {
      label: "你的 30 天故事",
      title: "观察延迟效应",
      desc: "拖动滑块，背后的食物会随之改变。迷走神经信号在几毫秒内触发，但对情绪的下游影响需要更长的时间。SCFA的水平会在数小时内发生变化。免疫和炎症的反应则可能需要 1-3 天才能达到顶峰。来看看这些信号的延迟效应。",
      correlation: "仅为演示而模拟的数据。相关性不代表因果关系。",
      
      bar_vagal: "迷走神经",
      bar_circ: "循环系统",
      bar_immune: "免疫系统",
      bar_mood: "情绪状态",

      day_prefix: "第",

      // Events
      ev_baseline: "基线状态",
      ev_fiber_starts: "开始高纤维饮食",
      ev_fiber: "高纤维饮食",
      ev_sustained_fiber: "维持高纤维饮食",
      ev_work_stress: "工作压力激增",
      ev_acute_stress: "急性压力期",
      ev_stress_cont: "压力持续",
      ev_stress_easing: "压力开始缓解",
      ev_fermented_add: "加入发酵食品",
      ev_fermented_fiber: "发酵食品 + 纤维",
      ev_diverse_diet: "多样化饮食",
      ev_stable_routine: "稳定的生活作息",
      ev_social_event: "社交活动 (饮酒)",
      ev_recovery: "身体恢复期",
      ev_recovery_begins: "开始恢复",
      ev_full_recovery: "完全恢复",
      ev_meditation: "加入冥想练习",
      ev_mind_gut: "脑肠练习",
      ev_peak_wellness: "极佳健康状态",

      // Foods
      food_baseline: "标准混合饮食",
      food_fiber: "高纤维：全谷物、豆类、蔬菜",
      food_junk1: "压力进食：舒适食品、快餐",
      food_fermented: "发酵食品：泡菜、酸菜、酸奶",
      food_balanced: "均衡健康的日常饮食",
      food_junk2: "社交聚餐：酒精、丰盛油腻的食物",
      food_recovery: "恢复期：清淡而有营养的餐饮",
      food_optimized: "优化饮食：纤维 + 发酵食品 + 正念饮食",

      // Insights
      in_rest_label: "休息状态",
      in_rest_body: "你的三条通路处于<strong>中立的休息状态</strong>。迷走神经张力适中，当前的饮食稳定产生短链脂肪酸(SCFAs)，炎症标志物处于低水平。这是你的基线——也就是你身体的起点。",
      in_rest_detail: "在标准混合饮食下，你的肠道微生物组产生中等水平的短链脂肪酸。没有急性压力因素来驱动免疫系统的激活。",

      in_fiber_label: "纤维正在滋养你的微生物组",
      in_fiber_body: "你刚切换到高纤维饮食。你的<strong>迷走神经通路几乎立刻亮了起来</strong>——肠道中的神经足细胞检测到新的营养特征，并向大脑发送信号。但是短链脂肪酸(SCFA)的生成尚未跟上，肠道细菌需要时间来增加发酵活动。",
      in_fiber_detail: "迷走神经信号通过谷氨酸能突触在几分钟内对营养做出响应。而纤维发酵产生的SCFAs则需要数小时到数天才能累积。吃下纤维和感受到全部认知益处之间的延迟，就从这里开始。",

      in_scfa_label: "短链脂肪酸(SCFAs)正在生成",
      in_scfa_body: "几天后，你的肠道细菌开始<strong>产生更多的SCFAs</strong>——丁酸、乙酸和丙酸。这些代谢物由于其促进血脑屏障(BBB)完整性的作用，正通过MCT转运蛋白穿过屏障，并开始调节小胶质细胞的活性。<strong>你的情绪正在逐步好转。</strong>",
      in_scfa_detail: "这是循环系统通路在发挥作用。请注意饮食质量与循环系统读条之间大约存在1天的延迟。你的免疫通路也在平静下来——因为吃饱的微生物组强化了肠道屏障，减少了炎症易位现象。",

      in_stress_hit_label: "压力突袭",
      in_stress_hit_body: "工作的压力突袭而至。你的<strong>迷走神经张力立刻下降</strong>——由于迷走神经是双向的，压力会抑制它的镇静信号。但关键是：<strong>你的免疫通路尚未做出反应</strong>。炎症引起的损伤正在酝酿，但也需要 1-3 天的时间。",
      in_stress_hit_detail: "下丘脑-垂体-肾上腺(HPA)轴被激活，使得皮质醇增加以及肠道通透性上升。压力还会使饮食向“心理安慰食物”倾斜，减少了纤维的摄入。目前的免疫级联反应尚未完全爆发——请关注接下来的几天红色读条。",

      in_stress_lag_label: "延迟开始显现",
      in_stress_lag_body: "压力依然存在。<strong>迷走神经与循环系统通路都被抑制</strong>——饮食中纤维减少意味着SCFAs生成量下降。现在注意观察你的免疫读条：它正在<strong>上升</strong>。像TNF-α和IL-6这样的细胞因子正在进入血液循环。这就是昨天发生的压力，在今天的身体里体现出来了。",
      in_stress_lag_detail: "这是 1-3 天延迟在发生作用。压力削弱了肠道屏障，使得细菌的脂多糖(LPS)发生易位。直到这些细胞因子穿过屏障进入中枢神经系统后，你的大脑才会感受到全部的炎症冲击——而这，正是现在发生的。",

      in_stress_ease_label: "压力缓解，但炎症处于顶峰",
      in_stress_ease_body: "压力源正在消退，但你的<strong>免疫通路此时达到了它的极高点</strong>。这是最违背常理的一刻：你感觉不那么有压力了，但是几天前的炎症级联反应<strong>此刻正在你的大脑中达到顶峰</strong>。所以情绪依然低落。",
      in_stress_ease_detail: "这种延迟的免疫顶峰解释了为什么人们经常在经历一段高压期之后生病，而不是在高压期间。迷走神经通路已开始恢复，但清除炎症细胞因子需要时间。你的心情读条刚好反映了这种复合的延迟。",

      in_ferm_label: "发酵食品加入了组合",
      in_ferm_body: "你在纤维配餐中加入了<strong>泡菜、酸菜和酸奶</strong>。这相当于直接向肠道引入活的益生菌——即丰富微生物群多样性的捷径。你的迷走神经张力正在迅速响应，这次SCFA的产生也会加快。",
      in_ferm_detail: "发酵食品同时提供益生元纤维和益生菌组织。一些菌株可以直接产生SCFAs，绕过了缓慢的发酵过程。因此循环通路的响应应当比仅靠纤维时更快。",

      in_recover_comp_label: "复苏叠加",
      in_recover_comp_body: "所有的三条通路都在<strong>朝着好的方向发展</strong>。迷走神经张力很高，SCFAs正在积累，免疫通路也终于平静下来。这就是恢复的全部面貌——它并不是瞬间完成的，而是分层的。每条通路都以其自身的速度恢复着。",
      in_recover_comp_detail: "请注意，循环系统的恢复大约在改善饮食的一天后，而免疫系统的迟滞恢复时间更久。随着三条通路重新对齐的叠合效应显现，你的心情正在逐步回暖。",

      in_rhythm_label: "找到你的节奏",
      in_rhythm_body: "一个平衡的生活作息正在形成。所有的信号都稳定下来。这就是一个<strong>良好调节的肠脑轴的状态</strong>——没有任何戏剧性的颠簸，而是对所有的三条通路建立了一致分层的支持。",
      in_rhythm_detail: "持续的饮食模式比单纯吃一顿饭重要的多。在坚持了两周的富含纤维和发酵食品的饮食后，微生物组构成本身便开始转移——而这不仅仅是它的代谢产物发生了改变。",

      in_social_label: "破坏模式的纵情之夜",
      in_social_body: "酒精和丰盛的食物冲击着系统。<strong>迷走神经张力急剧下降</strong>——酒精直接削弱了迷走神经的信号传导。肠道屏障受到打击。今天你会感到情绪低落，但<strong>免疫反应还需要 1-2 天才会到来</strong>。",
      in_social_detail: "酒精在几小时内便增加了肠道的通透性（“肠漏”），并破坏了微生物群。由于抑制了可产生SCFA的细菌，循环通路也放缓了。这仿佛是一次压力激增的重现缩影——同样的延迟、同样的模式。",

      in_recover_fast_label: "复苏——比之前更快",
      in_recover_fast_body: "你正在反弹，而且<strong>这次恢复得比以前更快</strong>。经过几周的纤维和发酵食品滋养，你的微生物组现在有了更强的韧性。迷走神经通路最先反弹，接着是循环系统，最后是免疫系统——顺序一致，但延迟相应缩短。",
      in_recover_fast_detail: "多样性更丰富的微生物组可以更快地从急性破坏中恢复。这就是持续饮食干预投资的关键益处之一：它不能预防每一次下落，但它能缩短你恢复的时间。",

      in_peak_label: "巅峰时刻：身心合一",
      in_peak_body: "冥想也被加入了进来。<strong>这三条通路均处于30天来的最高水平。</strong> 迷走神经张力强劲（冥想通过缓慢深呼吸直接刺激迷走神经），SCFAs 丰富，同时炎症标志物处于最低水平。当一切协同运作时，这就塑造了你肠脑轴最好的样子。",
      in_peak_detail: "膳食纤维、发酵食品，以及像冥想这类的刺激迷走神经做法相结合，在三条通路之间创造了一个积极的反馈循环。每一种通路都在互相巩固其余两者的效果。这正是个人定制版的这幅身体地图将帮助你寻找与维持的理想状态。"
    },
    // Deep Dives
    deepdives: {
      label: "三大机制",
      title: "深度探索",
      desc: "每条通路都在讲述一个不同的故事，它们揭示了你的身体内部世界如何传递到你的大脑。点击以探索每个故事背后的科学原理。",
      explore: "探索机制",

      vagal_num: "01",
      vagal_title: "神经足细胞特快列车",
      vagal_body: "神经足细胞与迷走神经元形成直接的谷氨酸能突触，在几毫秒内即可将营养信号传输到大脑。而在结肠中的第二条神经足细胞回路，利用 TLR5 来感知细菌鞭毛蛋白并释放 PYY 来调节进食行为。随后嗜铬细胞 (EC cells) 通过 TPH1 酶释放血清素来进一步放大该信号。",
      vagal_cite: "Kaelberer et al., Science 2018; Bohórquez, Kaelberer et al., Nature 2025",

      circ_num: "02",
      circ_title: "代谢物长河",
      circ_body: "肠道细菌将膳食纤维发酵成 SCFAs——乙酸、丙酸和丁酸。这些代谢物在血液中游走，通过脑内皮细胞上的 MCT 转运蛋白穿过血脑屏障，进而影响神经炎症和神经递质的水平。",
      circ_cite: "J Neuroinflammation 2025; Frontiers in Endocrinology 2020",

      immune_num: "03",
      immune_title: "缓慢的燃烧",
      immune_body: "当压力、不良饮食或菌群失调削弱了肠道屏障的完整性时——脂多糖 (LPS) 等细菌成分会转移到血液中，引发细胞因子级联反应（如 TNF-α、IL-6），这些炎症因子在几小时到几天内到达大脑，并引发情绪和认知的改变。",
      immune_cite: "Cell Reports Medicine 2025; Nature 2024",

      // Modal
      modal_label: "深度探索",
      modal_disclaimer: "这里描述的所有关联均基于已发表的同行评审研究。由于人类确认机制因路径而异，部分关联系在模型系统中观察到。",
      
      vagal_step1_label: "第一步",
      vagal_step1_title: "神经足细胞的突触感知 (十二指肠)",
      vagal_step1_body: "在<strong>十二指肠</strong>，一种叫<strong>神经足细胞 (neuropods)</strong> 的特殊肠道内分泌细胞与迷走传入神经元形成直接突触。当例如糖类营养物到达时，神经足细胞在<strong>几毫秒</strong>内使用<strong>谷氨酸</strong>作为快速神经递质来转导管腔信号——其速度远快于内分泌激素扩散。<em>(Kaelberer et al., Science, 2018)</em>",
      
      vagal_step2_label: "第二步",
      vagal_step2_title: "微生物感知 (结肠)",
      vagal_step2_body: "结肠中存在一个不同的回路。含有PYY的结肠神经足细胞表达模式识别受体 <strong>TLR5</strong>。当肠道细菌脱落<strong>鞭毛蛋白</strong>（一种鞭毛细菌尾部结构蛋白），TLR5激活触发向NPY2R迷走结节神经元<strong>释放 PYY</strong>，抑制进食行为。这是区别于十二指肠谷氨酸突触的独立机制。<em>(Bohórquez, Kaelberer et al., Nature, 2025)</em>",
      
      vagal_step3_label: "第三步",
      vagal_step3_title: "血清素放大",
      vagal_step3_body: "嗜铬细胞 (EC cells) 通过 <strong>TPH1 酶合成了人体 90% 以上的血清素</strong>。被释放的血清素激活迷走传入神经外围的 <strong>5-HT3 受体</strong> (传导速度按神经纤维分类为 <strong>~1-18 m/s</strong>)，这向脑干孤束核放大了神经信号。<em>(Int J Mol Sci, 2025; PMC11818468)</em>",
      
      vagal_step4_label: "第四步",
      vagal_step4_title: "大脑整合",
      vagal_step4_body: "孤束核 (NTS) 将受到影响的信号向中枢传递，包括<strong>背侧中缝核</strong> (调节情绪)、<strong>蓝斑核</strong> (调节警觉性) 以及包括<strong>杏仁核</strong>、<strong>海马体</strong>及<strong>前额叶皮层</strong>在内的更高级脑区——这些脑区与人的情绪、记忆及食欲的改变密切相关。注：尽管迷走神经传输很快(毫秒级)，下游的行为以及情绪变化仍需要长时间地显现。",

      circ_step1_label: "第一步",
      circ_step1_title: "细菌发酵",
      circ_step1_body: "肠道细菌能够将膳食纤维发酵成<strong>短链脂肪酸 (SCFAs)</strong>——主要是乙酸、丙酸和丁酸。这个过程会在食用富含纤维餐食之后的数小时内开启。<em>(Int J Mol Sci, 2023; PMC10606032)</em>",
      
      circ_step2_label: "第二步",
      circ_step2_title: "吸收及输送",
      circ_step2_body: "结肠细胞通过<strong>单羧酸转运蛋白 (MCT-1)</strong>以及钠耦合MCT (SMCT-1) 吸收SCFAs。大部分被用于局部能量消耗；少数进入<strong>门静脉循环系统</strong>。<em>(Frontiers in Endocrinology, 2020)</em>",
      
      circ_step3_label: "第三步",
      circ_step3_title: "穿透血脑屏障",
      circ_step3_body: "脑微血管内皮细胞表达具有允许SCFAs通过血脑屏障功能的 <strong>MCT 转运蛋白</strong>。大鼠模型颈动脉注射放射性标记SCFAs证实了这些物质已被大脑摄取。不仅如此，另一项独立研究还发现小鼠的大脑存在SCFAs受体(FFAR2/3)，超过60%位于海马体的FFAR3信使核糖核酸 (mRNA) 和激活的小胶质细胞共定位。<em>(Frontiers in Endocrinology, 2020; J Neuroinflammation, 2025; PMC12093714)</em>",
      
      circ_step4_label: "第四步",
      circ_step4_title: "神经调控",
      circ_step4_body: "一旦进入大脑，SCFAs会调节<strong>小胶质细胞的活化</strong>，通过紧密连接蛋白(occludin，claudin-5)增强<strong>血脑屏障的完整性</strong>并调节<strong>神经递质水平</strong>。丁酸酯不仅是一种短链脂肪酸，还能充当抑制HDAC的角色，通过表观遗传机制影响部分脑内细胞的基因表达。<em>(J Neuroinflammation, 2025; PMC12093714)</em>",

      immune_step1_label: "第一步",
      immune_step1_title: "屏障破坏",
      immune_step1_body: "压力、缺乏营养平衡的饮食或微生物失调会导致人体<strong>肠道上皮细胞屏障</strong>受损。当通透性显著增加时，比如脂多糖<strong>(LPS)</strong>、肽聚糖以及鞭毛蛋白等易位进入血液中。",
      
      immune_step2_label: "第二步",
      immune_step2_title: "免疫激活",
      immune_step2_body: "发生了易位的细菌衍生品触动固有免疫细胞产生并释放<strong>促炎症发生细胞因子群</strong>——包含<strong>TNF-α</strong>, <strong>IL-6</strong>, 以及 <strong>IL-1β</strong>。人体HPA轴（即下丘脑-垂体-肾上腺轴）被随之激活，除了放大自身的压力反应之外，也会加重肠道通透性恶化的状态。",
      
      immune_step3_label: "第三步",
      immune_step3_title: "细胞因子进入大脑网络",
      immune_step3_body: "被分泌进入循环系统的细胞因子的能通过各类途径进入大脑：<strong>室周器官</strong>、<strong>脉络丛</strong>，有时同样可以通过迷走传入通路等渠道进入人体大脑。而外周单核细胞和T细胞的免疫系统响应还进一步使其渗透进入脑膜和脑脊髓流体。",
      
      immune_step4_label: "第四步",
      immune_step4_title: "神经炎症响应",
      immune_step4_body: "身处大脑时，细胞因子主要作用在于激活<strong>小胶质细胞</strong>朝M1方向（即向促炎表型）偏移发展。小胶质细胞参与免疫防御反应的同时引发了神经元受阻、受挫的改变及递质发生质的变异；随着这些过程潜移默化地推移并在其后<strong>数天和数小时中不断累积</strong>，这种过程被广泛观察到将引出精神及认知方面的影响或行为变异。"
    },
    // Personal Section
    personal: {
      label: "将这一切变为你的专属",
      title: "你的身体，<br>属于你的信号",
      desc: "上面所讲的一切均来自已发表的学术文献。但你自己的迷走神经运作时间并非所谓的“大众平均值”，你的免疫系统延迟也有其独特的节奏。我们将向你展示这份图谱是如何开始了解你身体的。",
      
      step1_title: "连接你的信号",
      step1_body: "连接一台可穿戴设备，传输心率变异性、睡眠质量以及压力指标的实时数据——这些都是迷走神经通路最想要了解的数据。",
      
      step2_title: "只需 30 秒轻松记录",
      step2_body: "每天快速进行状态打卡：记录你吃了什么、肠道感觉如何，以及当天的心情。只需轻点两下或滑动一下，模型就会开始了解你个人专属的延迟时间。",
      
      step3_title: "眼见它的学习成长",
      step3_body: "在几周乃至数天里，图谱会根据你身体的独家数据而发生明暗变化。你的专属模式、独特的触发时间、敏感度和生理节律将清晰地展现在你眼前。",
      
      phone_title: "今日记录",
      p_fiber: "纤维摄入",
      v_fiber: "高",
      p_gut: "肠道舒适度",
      v_gut: "7/10",
      p_mood: "心情",
      v_mood: "良好",
      p_sleep: "睡眠质量 (HRV)",
      v_sleep: "52ms",
      p_stress: "压力指数",
      v_stress: "低"
    },
    // Footer
    footer: {
      disclaimer: "所有的科学声明均引用了顶级 (Tier 1) 的同行评审出版物。整个过程中使用的是相关性语言 — 已观察到的相关性并不能证明其在人类中存在直接的因果关系。该可视化应用仅供教育用途，不能作为医疗建议。",
      sources: "参考文献："
    }
  }
};
