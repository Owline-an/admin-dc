const translations = {
        en: {
            dir: "ltr",
            nav: { home: "Home", system: "System", lead: "Leaderboard", roll: "Roulette", btn: "العربية" },
            hero: { 
                h1: 'Dominance, <span class="cyan-neon">Redefined.</span>', 
                p: "The most advanced clan management system for Discord. Voice stats, hierarchical structures, custom identity, and live control right from your browser.", 
                add: "Add to Discord", 
                exp: "Dashboard" // 
            },
            feat: { span: "(Advanced Clan)", sub: "Full control over your group - Inspired by elite management algorithms including role hierarchy and voice hour tracking." },
            cards: {
                c1h: "Live Portal", c1p: "A live dashboard to manage clans entirely from the browser: adjust ranks, monitor activity, and send commands instantly.",
                c2h: "Hierarchy Mgmt", c2p: "Advanced hierarchy system: Owner, Deputy, Commanders, Members. Featuring precise Voice Hours tracking.",
                c3h: "Custom Identity", c3p: "Change rank colors, upload clan logos, and modify custom prefixes instantly without restarting the bot.",
                c4h: "Broadcast System", c4p: "Send official announcements and group messages to all clan members with a single click, featuring rich formatting."
            },
            desc: { h: "Clan Dynasty: The Era of Control", p: "Establish your clan, design your identity, and raise your banner in the heart of our glowing system to let everyone know who the masters are. <br><br>👑 Absolute Leadership | 🔒 Digital Sovereignty | 🎲 Roulette System" },
            lead: { span: "Leaderboard", sub: "AAA design displaying XP and ranks with dynamic progress tracking.", r: "Rank", m: "Member", c: "Clan", l: "Level" },
            roll: { span: "Roulette", sub: "Randomly change player roles using elegant selection menus - fully interactive.", h: "Pro Roulette System", p: "Assign roles randomly and fun through interactive Select menus. Integrated with Voice XP & Hierarchy.", btn: "Roll Random Roles", init: "🎲 Click the button to assign a random role!", result: "🎲 Result: Assigned role <strong style='color:#00FFA3'>{role}</strong> to member!" },
            footer: "© 2026 Clan Dynasty Bot — Advanced management system with Neon Glassmorphism. All rights reserved."
        },
        ar: {
            dir: "rtl",
            nav: { home: "الرئيسية", system: "النظام", lead: "المتصدرين", roll: "الروليت", btn: "English" },
            hero: { 
                h1: 'السيادة، <span class="cyan-neon">بمفهوم جديد.</span>', 
                p: "نظام إدارة العشائر الأكثر تطوراً لديسكورد. إحصائيات صوتية، تسلسل هرمي، هوية مخصصة، وتحكم مباشر من المتصفح.", 
                add: "أضف لديسكورد", 
                exp: "لوحة التحكم" 
            },
            feat: { span: "(عشيرة متطورة)", sub: "تحكم كامل بمجموعتك - مستوحى من خوارزميات الإدارة العالمية التي تشمل التسلسل الهرمي وتتبع ساعات الصوت." },
            cards: {
                c1h: "البوابة الحية", c1p: "لوحة تحكم حية لإدارة العشائر بالكامل من المتصفح: تعديل الرتب، مراقبة النشاط، وإرسال الأوامر فورياً.",
                c2h: "إدارة الهرمية", c2p: "نظام تسلسل هرمي متقدم: مالك، نائب، قادة، وأعضاء. مع تتبع دقيق لساعات الصوت.",
                c3h: "هوية مخصصة", c3p: "تغيير ألوان الرتب، رفع شعارات العشيرة، وتعديل البريفكس فورياً دون الحاجة لإعادة التشغيل.",
                c4h: "نظام البث", c4p: "إرسال إعلانات رسمية ورسائل جماعية لجميع أعضاء العشيرة بضغطة زر واحدة."
            },
            desc: { h: "عشيرة الداينستي: عصر السيطرة", p: "أسس عشيرتك، صمم هويتك، وارفع شعارك في قلب نظامنا المتوهج ليعلم الجميع من هم الأسياد الجدد. <br><br>👑 قيادة مطلقة | 🔒 سيادة رقمية | 🎲 نظام الروليت" },
            lead: { span: "المتصدرين", sub: "تصميم AAA يعرض نقاط الخبرة والرتب مع تتبع حي للتقدم.", r: "المرتبة", m: "العضو", c: "العشيرة", l: "المستوى" },
            roll: { span: "الروليت", sub: "تغيير أدوار اللاعبين عشوائياً باستخدام قوائم اختيار أنيقة - تفاعلي بالكامل.", h: "نظام روليت احترافي", p: "توزيع الأدوار عشوائياً وبشكل ممتع. متكامل تماماً مع نظام الخبرة الصوتي والهرمية.", btn: "توزيع عشوائي", init: "🎲 اضغط الزر لتعيين دور عشوائي!", result: "🎲 النتيجة: تم تعيين دور <strong style='color:#00FFA3'>{role}</strong> للعضو!" },
            footer: "© 2026 بوت عشيرة داينستي — نظام إدارة متطور بتقنيات . جميع الحقوق محفوظة."
        }
    };

    let currentLang = 'en';

    function toggleLanguage() {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        const langData = translations[currentLang];
        
        document.getElementById('html-tag').setAttribute('lang', currentLang);
        document.getElementById('html-tag').setAttribute('dir', langData.dir);
        
        document.getElementById('nav-home').innerText = langData.nav.home;
        document.getElementById('nav-features').innerText = langData.nav.system;
        document.getElementById('nav-leaderboard').innerText = langData.nav.lead;
        document.getElementById('nav-roulette').innerText = langData.nav.roll;
        document.getElementById('lang-btn-text').innerText = langData.nav.btn;

        document.getElementById('hero-h1').innerHTML = langData.hero.h1;
        document.getElementById('hero-p').innerText = langData.hero.p;
        document.getElementById('add-discord-btn').innerHTML = `<i class="fab fa-discord"></i> ${langData.hero.add}`;
        document.getElementById('explore-btn').innerHTML = `<i class="fas fa-chart-line"></i> ${langData.hero.exp}`;

        document.getElementById('feat-span').innerText = langData.feat.span;
        document.getElementById('feat-sub').innerText = langData.feat.sub;
        document.getElementById('card1-h').innerText = langData.cards.c1h;
        document.getElementById('card1-p').innerText = langData.cards.c1p;
        document.getElementById('card2-h').innerText = langData.cards.c2h;
        document.getElementById('card2-p').innerText = langData.cards.c2p;
        document.getElementById('card3-h').innerText = langData.cards.c3h;
        document.getElementById('card3-p').innerText = langData.cards.c3p;
        document.getElementById('card4-h').innerText = langData.cards.c4h;
        document.getElementById('card4-p').innerText = langData.cards.c4p;

        document.getElementById('desc-h').innerText = langData.desc.h;
        document.getElementById('desc-p').innerHTML = langData.desc.p;

        document.getElementById('lead-span').innerText = langData.lead.span;
        document.getElementById('lead-sub').innerText = langData.lead.sub;
        document.getElementById('th-rank').innerText = langData.lead.r;
        document.getElementById('th-member').innerText = langData.lead.m;
        document.getElementById('th-clan').innerText = langData.lead.c;
        document.getElementById('th-level').innerText = langData.lead.l;

        document.getElementById('roll-span').innerText = langData.roll.span;
        document.getElementById('roll-sub').innerText = langData.roll.sub;
        document.getElementById('roll-info-h').innerHTML = `<i class="fas fa-dice-d6"></i> ${langData.roll.h}`;
        document.getElementById('roll-info-p').innerText = langData.roll.p;
        document.getElementById('roll-btn-text').innerText = langData.roll.btn;
        document.getElementById('roll-init-text').innerText = langData.roll.init;

        document.getElementById('footer-p1').innerText = langData.footer;
    }

    function scrollToId(id) {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }

    // Roulette Logic
    const rollBtn = document.getElementById('rollBtn');
    const roleSelect = document.getElementById('roleSelect');
    const resultDiv = document.getElementById('rollResult');

    const extraRolesEn = ["🔥 Pyro", "⚡ Ninja", "🧙 Warlock", "🛡️ Guardian", "💀 Reaper", "🌀 Mystic"];
    const extraRolesAr = ["🔥 مشتعل", "⚡ نينجا", "🧙 ساحر", "🛡️ حارس", "💀 ريبر", "🌀 غامض"];

    rollBtn.addEventListener('click', () => {
        const selectedRole = roleSelect.options[roleSelect.selectedIndex]?.text || "Assault";
        const extras = currentLang === 'en' ? extraRolesEn : extraRolesAr;
        const randomExtra = extras[Math.floor(Math.random() * extras.length)];
        const finalRole = `${selectedRole} + ${randomExtra}`;
        
        const template = translations[currentLang].roll.result;
        resultDiv.innerHTML = template.replace('{role}', finalRole);
        
        resultDiv.style.transform = "scale(1.05)";
        setTimeout(() => { resultDiv.style.transform = "scale(1)"; }, 200);
    });
