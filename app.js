/* ========================================================
   BINO EXPLORER — APPLICATION LOGIC
   ======================================================== */

// ============================================================
// DATA: Pipeline Simulator Scenarios
// ============================================================
const scenarios = {
  travel: {
    messages: [
      { type: 'sent', text: 'Hi Bino! Need Delhi to Goa flights for 2 people next weekend 🏖️' },
      { type: 'received', text: 'Hey! 👋 Let me find the best Goa flights for you. Searching all airlines...' },
      { type: 'received', text: '✈️ Found 3 options for Delhi → Goa (next Sat):\n\n1. SpiceJet — ₹3,150/person\n2. IndiGo — ₹3,420/person\n3. Air India — ₹3,890/person\n\nWant me to check hotels near Baga beach too?' },
      { type: 'sent', text: 'Yes! Need a cozy homestay for 2 nights 🏡' },
      { type: 'received', text: '🏡 3 verified homestays near Baga Beach:\n\n1. Casa Del Sol — ₹2,800/night ⭐4.8\n2. Goan Vibes Villa — ₹1,950/night ⭐4.6\n3. Beach Nest Cottage — ₹3,400/night ⭐4.9\n\nAll rated 4.5+ by real guests. Want me to book the SpiceJet flight + a stay? 🎉' },
    ]
  },
  home: {
    messages: [
      { type: 'sent', text: 'Need an electrician in Indiranagar, Bangalore ASAP ⚡' },
      { type: 'received', text: 'On it! 🔍 Searching verified electricians near Indiranagar...' },
      { type: 'received', text: '⚡ Found 3 electricians available today:\n\n1. Rajesh Electricals — ⭐4.9 — ₹300/hr\n2. PowerFix Pro — ⭐4.7 — ₹350/hr\n3. Quick Spark — ⭐4.8 — ₹400/hr\n\nAll verified & rated 4.5+ by real users. Who should I connect you with?' },
      { type: 'sent', text: 'Rajesh looks great, please connect!' },
      { type: 'received', text: '✅ Done! Rajesh Electricals will reach out to you in the next 5 minutes. They\'ll call you directly.\n\nAnything else you need? 🙌' },
    ]
  },
  food: {
    messages: [
      { type: 'sent', text: 'Need catering for a birthday party, 50 people, this Saturday 🎂' },
      { type: 'received', text: 'Happy birthday prep! 🎉 Let me find caterers for 50 people. Any cuisine preference?' },
      { type: 'sent', text: 'South Indian + some Chinese starters' },
      { type: 'received', text: '🍽️ Got 3 custom quotes for you:\n\n1. Annapurna Caterers — ₹450/plate ⭐4.8\n   Full SI thali + 4 Chinese starters\n\n2. Royal Kitchen — ₹380/plate ⭐4.6\n   SI meals + 3 Chinese options\n\n3. Spice Route — ₹520/plate ⭐4.9\n   Premium SI spread + live Chinese counter\n\nAll quotes include delivery & setup! 🎂' },
      { type: 'sent', text: 'Spice Route sounds amazing!' },
      { type: 'received', text: '✅ Connecting you with Spice Route now. They\'ll share the full menu and confirm timing.\n\nHappy birthday! 🎉🎂' },
    ]
  },
  vehicle: {
    messages: [
      { type: 'sent', text: 'Looking for a second-hand Honda City in Hyderabad under ₹6 lakhs 🚗' },
      { type: 'received', text: '🚗 Searching our verified dealer network in Hyderabad...' },
      { type: 'received', text: '🚗 Found 3 options matching your criteria:\n\n1. Honda City 2019 V MT — ₹5.2L\n   45,000 km · White · Single owner\n\n2. Honda City 2020 SV — ₹5.8L\n   32,000 km · Silver · First owner\n\n3. Honda City 2018 VX — ₹4.9L\n   58,000 km · Grey · Service history available\n\nAll from verified dealers. Want to schedule a test drive? 🔑' },
      { type: 'sent', text: 'The 2020 one looks perfect. Can I see it tomorrow?' },
      { type: 'received', text: '✅ Test drive scheduled for tomorrow at 11 AM!\n\n📍 AutoTrust Motors, Jubilee Hills\n📞 They\'ll call you to confirm.\n\nGood luck! 🚗✨' },
    ]
  },
  health: {
    messages: [
      { type: 'sent', text: 'Need a dentist near Koramangala accepting walk-ins today 🦷' },
      { type: 'received', text: '🔍 Checking dental clinics near Koramangala with availability today...' },
      { type: 'received', text: '🦷 Found 3 dental clinics with today\'s availability:\n\n1. SmileCare Dental — ⭐4.9\n   Walk-in slots: 2 PM, 4 PM · ₹500 consultation\n\n2. DentPro Clinic — ⭐4.7\n   Walk-in slots: 3 PM · ₹400 consultation\n\n3. Apollo Dental — ⭐4.8\n   Walk-in slots: 1 PM, 5 PM · ₹600 consultation\n\nAll verified dentists. Shall I book a slot?' },
      { type: 'sent', text: 'SmileCare at 4 PM please!' },
      { type: 'received', text: '✅ Appointment booked!\n\n🦷 SmileCare Dental\n📅 Today, 4:00 PM\n📍 80 Feet Road, Koramangala\n\nCarry your ID. Feel better soon! 😊' },
    ]
  },
  professional: {
    messages: [
      { type: 'sent', text: 'Need a CA for GST filing for my small business 💼' },
      { type: 'received', text: '💼 Let me find chartered accountants who specialize in GST for small businesses...' },
      { type: 'received', text: '💼 3 verified CAs available:\n\n1. Priya & Associates — ⭐4.9\n   GST filing from ₹1,500/month\n   500+ small business clients\n\n2. TaxEase CA — ⭐4.7\n   GST + ITR combo at ₹2,000/month\n   Free consultation\n\n3. Sharma Tax Consultants — ⭐4.8\n   GST filing from ₹1,200/month\n   Specializes in startups\n\nWant a free consultation with any of them?' },
      { type: 'sent', text: 'Free consultation with TaxEase please!' },
      { type: 'received', text: '✅ TaxEase CA will call you within 30 minutes for a free consultation.\n\nThey\'ll guide you through the entire GST process. Good luck with your business! 🚀' },
    ]
  }
};

// ============================================================
// DATA: Query Builder Form Fields
// ============================================================
const categoryFields = {
  home: {
    label: 'Home & Repairs',
    fields: [
      { id: 'service', label: 'What service do you need?', type: 'select', options: ['Plumber', 'Electrician', 'Carpenter', 'Painter', 'AC Repair', 'Pest Control', 'Deep Cleaning', 'Other'] },
      { id: 'location', label: 'Location / Area', type: 'text', placeholder: 'e.g. Koramangala, Bangalore' },
      { id: 'urgency', label: 'When do you need it?', type: 'select', options: ['Right now / ASAP', 'Today', 'Tomorrow', 'This week', 'No rush'] },
      { id: 'details', label: 'Describe the issue (optional)', type: 'textarea', placeholder: 'e.g. Kitchen sink is leaking badly...' }
    ],
    buildMessage: (data) => {
      let msg = `Hi Bino! Need a ${data.service || 'repair service'}`;
      if (data.location) msg += ` in ${data.location}`;
      if (data.urgency && data.urgency !== 'No rush') msg += ` — ${data.urgency.toLowerCase()}`;
      if (data.details) msg += `. ${data.details}`;
      return msg;
    }
  },
  travel: {
    label: 'Travel & Stays',
    fields: [
      { id: 'from', label: 'Travelling from', type: 'text', placeholder: 'e.g. Delhi' },
      { id: 'to', label: 'Travelling to', type: 'text', placeholder: 'e.g. Goa' },
      { id: 'dates', label: 'Travel dates', type: 'text', placeholder: 'e.g. Mar 25-28 or next weekend' },
      { id: 'people', label: 'Number of people', type: 'select', options: ['1', '2', '3', '4', '5+', 'Group (10+)'] },
      { id: 'type', label: 'What do you need?', type: 'select', options: ['Flights + Hotels', 'Flights only', 'Hotels / Homestays only', 'Full itinerary', 'Cab / Transport', 'Activities & Tours'] },
      { id: 'details', label: 'Any preferences? (optional)', type: 'textarea', placeholder: 'e.g. Budget-friendly, near beach, family-friendly...' }
    ],
    buildMessage: (data) => {
      let msg = `Hi Bino! Looking for ${data.type || 'travel options'}`;
      if (data.from && data.to) msg += ` from ${data.from} to ${data.to}`;
      else if (data.to) msg += ` in ${data.to}`;
      if (data.dates) msg += ` for ${data.dates}`;
      if (data.people) msg += `, ${data.people} people`;
      if (data.details) msg += `. ${data.details}`;
      return msg;
    }
  },
  food: {
    label: 'Food & Events',
    fields: [
      { id: 'type', label: 'What are you looking for?', type: 'select', options: ['Catering', 'Restaurant booking', 'Cake / Bakery', 'Event planner', 'DJ / Music', 'Decoration', 'Photographer', 'Other'] },
      { id: 'event', label: 'For what event?', type: 'text', placeholder: 'e.g. Birthday party, Wedding, Office event' },
      { id: 'people', label: 'Number of people', type: 'text', placeholder: 'e.g. 50' },
      { id: 'location', label: 'Location', type: 'text', placeholder: 'e.g. HSR Layout, Bangalore' },
      { id: 'details', label: 'Any specifics? (optional)', type: 'textarea', placeholder: 'e.g. South Indian cuisine, budget ₹500/plate...' }
    ],
    buildMessage: (data) => {
      let msg = `Hi Bino! Need ${data.type || 'food/event services'}`;
      if (data.event) msg += ` for a ${data.event}`;
      if (data.people) msg += `, ${data.people} people`;
      if (data.location) msg += ` in ${data.location}`;
      if (data.details) msg += `. ${data.details}`;
      return msg;
    }
  },
  vehicle: {
    label: 'Vehicles',
    fields: [
      { id: 'type', label: 'What do you need?', type: 'select', options: ['Buy a car', 'Buy a bike', 'Car repair / service', 'Car wash', 'Rent a car', 'Rent a bike / scooter', 'Sell my vehicle', 'Other'] },
      { id: 'details', label: 'Describe what you\'re looking for', type: 'text', placeholder: 'e.g. Honda City under 6 lakhs, 2019 or newer' },
      { id: 'location', label: 'City / Location', type: 'text', placeholder: 'e.g. Hyderabad' },
      { id: 'extra', label: 'Anything else? (optional)', type: 'textarea', placeholder: 'e.g. Single owner preferred, white or silver color...' }
    ],
    buildMessage: (data) => {
      let msg = `Hi Bino! Looking to ${data.type ? data.type.toLowerCase() : 'find a vehicle'}`;
      if (data.details) msg += ` — ${data.details}`;
      if (data.location) msg += ` in ${data.location}`;
      if (data.extra) msg += `. ${data.extra}`;
      return msg;
    }
  },
  health: {
    label: 'Healthcare',
    fields: [
      { id: 'type', label: 'What do you need?', type: 'select', options: ['Doctor consultation', 'Dentist', 'Eye specialist', 'Physiotherapy', 'Lab tests', 'Medicine delivery', 'Mental health', 'Other'] },
      { id: 'location', label: 'Location / Area', type: 'text', placeholder: 'e.g. Whitefield, Bangalore' },
      { id: 'urgency', label: 'When?', type: 'select', options: ['Today / Walk-in', 'Tomorrow', 'This week', 'Next available'] },
      { id: 'details', label: 'Any specifics? (optional)', type: 'textarea', placeholder: 'e.g. Tooth pain, need root canal assessment...' }
    ],
    buildMessage: (data) => {
      let msg = `Hi Bino! Need a ${data.type || 'healthcare service'}`;
      if (data.location) msg += ` near ${data.location}`;
      if (data.urgency) msg += `, ${data.urgency.toLowerCase()}`;
      if (data.details) msg += `. ${data.details}`;
      return msg;
    }
  },
  professional: {
    label: 'Professional Services',
    fields: [
      { id: 'type', label: 'What service?', type: 'select', options: ['Chartered Accountant', 'Lawyer', 'Interior Designer', 'Architect', 'Digital Marketing', 'Web Developer', 'Tutor / Teacher', 'Other'] },
      { id: 'purpose', label: 'For what purpose?', type: 'text', placeholder: 'e.g. GST filing, Trademark registration' },
      { id: 'location', label: 'Location (optional)', type: 'text', placeholder: 'e.g. Mumbai' },
      { id: 'details', label: 'Additional details (optional)', type: 'textarea', placeholder: 'e.g. Small business, need monthly retainer...' }
    ],
    buildMessage: (data) => {
      let msg = `Hi Bino! Need a ${data.type || 'professional service'}`;
      if (data.purpose) msg += ` for ${data.purpose}`;
      if (data.location) msg += ` in ${data.location}`;
      if (data.details) msg += `. ${data.details}`;
      return msg;
    }
  },
  buysell: {
    label: 'Buy & Sell',
    fields: [
      { id: 'action', label: 'Do you want to...', type: 'select', options: ['Buy something', 'Sell something', 'Find a deal', 'Price comparison'] },
      { id: 'item', label: 'What item?', type: 'text', placeholder: 'e.g. iPhone 15, Furniture, Vintage watch' },
      { id: 'budget', label: 'Budget range (optional)', type: 'text', placeholder: 'e.g. Under ₹50,000' },
      { id: 'location', label: 'City / Location', type: 'text', placeholder: 'e.g. Bangalore' },
      { id: 'details', label: 'Any specifics? (optional)', type: 'textarea', placeholder: 'e.g. Brand new preferred, with warranty...' }
    ],
    buildMessage: (data) => {
      let msg = `Hi Bino! Want to ${data.action ? data.action.toLowerCase() : 'find'}`;
      if (data.item) msg += ` — ${data.item}`;
      if (data.budget) msg += `, budget ${data.budget}`;
      if (data.location) msg += ` in ${data.location}`;
      if (data.details) msg += `. ${data.details}`;
      return msg;
    }
  },
  other: {
    label: 'Anything Else',
    fields: [
      { id: 'query', label: 'What do you need help with?', type: 'textarea', placeholder: 'Describe anything you need — Bino can search for almost anything! e.g. "Find a dog groomer near me", "Vintage watch repair specialist", "Compare gym memberships in my area"' }
    ],
    buildMessage: (data) => {
      return `Hi Bino! ${data.query || 'I need help finding something'}`;
    }
  }
};

// ============================================================
// GLOBAL STATE
// ============================================================
let currentSimCategory = 'travel';
let currentBuilderCategory = null;
let simTimeouts = [];
let qrCodeInstance = null;

// ============================================================
// INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollReveal();
  initSimulator();
  initQueryBuilder();
  initTabs();
  initEmbedGenerator();
  initShareableURL();
});

// ============================================================
// NAVIGATION
// ============================================================
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('navHamburger');
  const navLinks = document.getElementById('navLinks');

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (navLinks.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '1';
      spans[2].style.transform = '';
    }
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '1';
      spans[2].style.transform = '';
    });
  });

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ============================================================
// SCROLL REVEAL ANIMATIONS
// ============================================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============================================================
// PIPELINE SIMULATOR
// ============================================================
function initSimulator() {
  const categoryButtons = document.querySelectorAll('.sim-cat');
  
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSimCategory = btn.dataset.category;
      runSimulation(currentSimCategory);
    });
  });

  // Auto-start first simulation
  setTimeout(() => {
    runSimulation('travel');
  }, 1000);
}

function runSimulation(category) {
  const chatArea = document.getElementById('simChatArea');
  const statusEl = document.getElementById('simStatus');
  
  // Clear previous timeouts
  simTimeouts.forEach(t => clearTimeout(t));
  simTimeouts = [];

  // Reset chat
  chatArea.innerHTML = '<div class="chat-date-badge">Today</div>';
  statusEl.textContent = 'online';

  const scenario = scenarios[category];
  if (!scenario) return;

  let delay = 500;

  scenario.messages.forEach((msg, index) => {
    if (msg.type === 'received') {
      // Show typing indicator first
      const typingDelay = delay;
      simTimeouts.push(setTimeout(() => {
        statusEl.textContent = 'typing...';
        const typingEl = document.createElement('div');
        typingEl.className = 'typing-indicator';
        typingEl.id = 'typingIndicator';
        typingEl.innerHTML = '<span></span><span></span><span></span>';
        chatArea.appendChild(typingEl);
        chatArea.scrollTop = chatArea.scrollHeight;
      }, typingDelay));
      delay += 1500;
    }

    const msgDelay = delay;
    simTimeouts.push(setTimeout(() => {
      // Remove typing indicator
      const typing = document.getElementById('typingIndicator');
      if (typing) typing.remove();
      statusEl.textContent = 'online';

      const bubble = document.createElement('div');
      bubble.className = `chat-bubble ${msg.type === 'sent' ? 'sent' : 'received'}`;
      
      const time = new Date();
      time.setMinutes(time.getMinutes() + index);
      const timeStr = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
      
      // Convert newlines to <br> for display
      const formattedText = msg.text.replace(/\n/g, '<br>');
      
      bubble.innerHTML = `
        <p>${formattedText}</p>
        <span class="chat-time">${timeStr}${msg.type === 'sent' ? ' <span class="read-receipt">✓✓</span>' : ''}</span>
      `;
      
      chatArea.appendChild(bubble);
      chatArea.scrollTop = chatArea.scrollHeight;
    }, msgDelay));

    delay += msg.type === 'sent' ? 800 : 1000;
  });
}

// ============================================================
// AI QUERY BUILDER
// ============================================================
function initQueryBuilder() {
  const categoryBtns = document.querySelectorAll('.builder-cat');
  const step1 = document.getElementById('builderStep1');
  const step2 = document.getElementById('builderStep2');
  const step3 = document.getElementById('builderStep3');
  const backBtn = document.getElementById('builderBack');
  const generateBtn = document.getElementById('builderGenerate');
  const restartBtn = document.getElementById('builderRestart');
  const copyMsgBtn = document.getElementById('resultCopyMsg');
  const shareUrlBtn = document.getElementById('resultShareUrl');
  const showQRBtn = document.getElementById('resultShowQR');

  // Step 1: Category selection
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentBuilderCategory = btn.dataset.cat;
      renderBuilderForm(currentBuilderCategory);
      step1.classList.add('hidden');
      step2.classList.remove('hidden');
    });
  });

  // Back to Step 1
  backBtn.addEventListener('click', () => {
    step2.classList.add('hidden');
    step1.classList.remove('hidden');
  });

  // Generate message
  generateBtn.addEventListener('click', () => {
    const message = buildMessage();
    if (message) {
      displayResult(message);
      step2.classList.add('hidden');
      step3.classList.remove('hidden');
    }
  });

  // Restart
  restartBtn.addEventListener('click', () => {
    step3.classList.add('hidden');
    step1.classList.remove('hidden');
    // Hide QR
    document.getElementById('qrSection').classList.add('hidden');
  });

  // Copy message
  copyMsgBtn.addEventListener('click', () => {
    const msg = document.getElementById('resultMessage').textContent;
    navigator.clipboard.writeText(msg).then(() => showToast('Message copied! 📋'));
  });

  // Share URL
  shareUrlBtn.addEventListener('click', () => {
    const url = generateShareableURL();
    navigator.clipboard.writeText(url).then(() => showToast('Shareable link copied! 🔗'));
  });

  // Show QR
  showQRBtn.addEventListener('click', () => {
    const qrSection = document.getElementById('qrSection');
    qrSection.classList.toggle('hidden');
    if (!qrSection.classList.contains('hidden')) {
      generateQRCode();
    }
  });
}

function renderBuilderForm(category) {
  const form = document.getElementById('builderForm');
  const config = categoryFields[category];
  if (!config) return;

  form.innerHTML = '';

  config.fields.forEach(field => {
    const div = document.createElement('div');
    div.className = 'builder-field';

    let inputHTML = '';
    if (field.type === 'text') {
      inputHTML = `<input type="text" id="field_${field.id}" placeholder="${field.placeholder || ''}" />`;
    } else if (field.type === 'textarea') {
      inputHTML = `<textarea id="field_${field.id}" placeholder="${field.placeholder || ''}" rows="3"></textarea>`;
    } else if (field.type === 'select') {
      const options = field.options.map(opt => `<option value="${opt}">${opt}</option>`).join('');
      inputHTML = `<select id="field_${field.id}"><option value="">Select...</option>${options}</select>`;
    }

    div.innerHTML = `<label for="field_${field.id}">${field.label}</label>${inputHTML}`;
    form.appendChild(div);
  });
}

function buildMessage() {
  const config = categoryFields[currentBuilderCategory];
  if (!config) return null;

  const data = {};
  config.fields.forEach(field => {
    const el = document.getElementById(`field_${field.id}`);
    if (el) data[field.id] = el.value.trim();
  });

  return config.buildMessage(data);
}

function displayResult(message) {
  document.getElementById('resultMessage').textContent = message;
  
  const waLink = `https://wa.me/919800081110?text=${encodeURIComponent(message)}`;
  document.getElementById('resultWhatsApp').href = waLink;
}

// ============================================================
// QR CODE
// ============================================================
function generateQRCode() {
  const qrContainer = document.getElementById('qrCode');
  const message = document.getElementById('resultMessage').textContent;
  const waLink = `https://wa.me/919800081110?text=${encodeURIComponent(message)}`;

  // Clear previous QR
  qrContainer.innerHTML = '';
  
  if (typeof QRCode !== 'undefined') {
    qrCodeInstance = new QRCode(qrContainer, {
      text: waLink,
      width: 200,
      height: 200,
      colorDark: '#25D366',
      colorLight: '#0a0a0f',
      correctLevel: QRCode.CorrectLevel.H
    });
  } else {
    qrContainer.innerHTML = '<p style="color: var(--text-tertiary); font-size: 0.875rem;">QR library loading... Please try again.</p>';
  }
}

// ============================================================
// SHAREABLE URL
// ============================================================
function generateShareableURL() {
  const message = document.getElementById('resultMessage').textContent;
  const url = new URL(window.location.href.split('?')[0]);
  url.searchParams.set('cat', currentBuilderCategory || '');
  url.searchParams.set('q', message);
  return url.toString();
}

function initShareableURL() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  const query = params.get('q');

  if (cat && query && categoryFields[cat]) {
    // Auto-navigate to result
    currentBuilderCategory = cat;
    
    setTimeout(() => {
      document.getElementById('builderStep1').classList.add('hidden');
      document.getElementById('builderStep3').classList.remove('hidden');
      displayResult(query);
      
      // Scroll to query builder
      document.getElementById('query-builder').scrollIntoView({ behavior: 'smooth' });
    }, 500);
  }
}

// ============================================================
// TABS (For Everyone section)
// ============================================================
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      tabPanels.forEach(panel => {
        panel.classList.remove('active');
      });

      const targetPanel = document.getElementById(`tab${capitalize(target)}`);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ============================================================
// EMBED CODE GENERATOR
// ============================================================
function initEmbedGenerator() {
  const styleSelect = document.getElementById('embedStyle');
  const sizeSelect = document.getElementById('embedSize');
  const codeEl = document.getElementById('embedCode');
  const copyBtn = document.getElementById('copyEmbedCode');

  function updateEmbedCode() {
    const style = styleSelect.value;
    const size = sizeSelect.value;

    const colors = {
      dark: { bg: '#1a1a2e', text: '#ffffff', accent: '#25D366' },
      light: { bg: '#ffffff', text: '#333333', accent: '#25D366' },
      green: { bg: '#25D366', text: '#000000', accent: '#000000' }
    };

    const sizes = {
      small: { padding: '10px 20px', font: '14px' },
      medium: { padding: '14px 28px', font: '16px' },
      large: { padding: '18px 36px', font: '18px' }
    };

    const c = colors[style];
    const s = sizes[size];

    const code = `<!-- Bino Search Widget -->
<a href="https://wa.me/919800081110"
   target="_blank" rel="noopener"
   style="display:inline-flex;align-items:center;
   gap:8px;background:${c.bg};color:${c.text};
   text-decoration:none;padding:${s.padding};
   border-radius:50px;font-family:Inter,sans-serif;
   font-size:${s.font};font-weight:700;
   border:2px solid ${c.accent};
   box-shadow:0 0 20px ${c.accent}33;
   transition:transform 0.2s ease"
   onmouseover="this.style.transform='scale(1.05)'"
   onmouseout="this.style.transform='scale(1)'">
  🔍 Search via Bino
</a>
<p style="font-size:11px;color:#888;margin-top:6px">
  Powered by <a href="https://bino.bot"
  style="color:${c.accent}">bino.bot</a>
</p>`;

    codeEl.textContent = code;
  }

  styleSelect.addEventListener('change', updateEmbedCode);
  sizeSelect.addEventListener('change', updateEmbedCode);

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(codeEl.textContent).then(() => {
      showToast('Embed code copied! 📋');
    });
  });

  // Initial render
  updateEmbedCode();
}

// ============================================================
// TOAST NOTIFICATION
// ============================================================
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  
  toastMsg.textContent = message;
  toast.classList.remove('hidden');
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.classList.add('hidden'), 400);
  }, 2500);
}
