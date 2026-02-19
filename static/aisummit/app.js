/**
 * AI Summit Explorer — Application Logic
 * IndiaAI Impact Summit 2026
 */

// Video IDs that have transcripts available
const TRANSCRIPT_IDS = new Set([
    "43EHiSmOUP0", "5oGiAv1Flv0", "9XLZYkeHfwU", "AQ6Ue8yTaws",
    "GStnBiu2-tY", "JV3io_F-hpw", "KH4MfOCNc9c", "KmvuQ1ece0U",
    "L20KikLPG-Y", "NMGGu2KGk7I", "NSbtlviJl3c", "NedGc0YfKb0",
    "TJJQ_yV1ctg", "UDxc-3qyQFQ", "V2bZQ-pUR4c", "WczkaZ-XlN4",
    "WjJDrD21PzM", "XMCRrgMuLWk", "XvnJq0nttCs", "YF2OJdU-pRU",
    "YhKP6cNXpy0", "Yu8ZECRLcsM", "drlt0zIE8ik", "fGr82MtkEmk",
    "gtSRUbmFOdA", "mFFIkdl6p8Q", "pNqHMCmAOD8", "s2EPNi9WFqg",
    "uu2WmsXjWIo", "yoARU2QXTrU", "yuQMOg1Em-I", "yz1xah0Twy4",
]);

// ============================================================
// State
// ============================================================
const state = {
    activeCategory: null,
    activeSubcategory: null,
    searchQuery: '',
    viewMode: 'grid',
    chatOpen: false,
    sidebarOpen: true,
    transcripts: {},     // videoId -> transcript text
    chatHistory: [],
    favorites: new Set(), // Set of video IDs
};

// Default favorites (must-watch sessions)
const DEFAULT_FAVORITES = ['NSbtlviJl3c', '98LclA6a2NA', 'XvnJq0nttCs'];

function loadFavorites() {
    try {
        const saved = localStorage.getItem('aisummit_favorites');
        if (saved) {
            state.favorites = new Set(JSON.parse(saved));
        } else {
            state.favorites = new Set(DEFAULT_FAVORITES);
            saveFavorites();
        }
    } catch (e) {
        state.favorites = new Set(DEFAULT_FAVORITES);
    }
}

function saveFavorites() {
    localStorage.setItem('aisummit_favorites', JSON.stringify([...state.favorites]));
}

function toggleFavorite(videoId) {
    if (state.favorites.has(videoId)) {
        state.favorites.delete(videoId);
    } else {
        state.favorites.add(videoId);
    }
    saveFavorites();
    renderFavorites();
    renderVideoGrid();
}

// ============================================================
// Category Helpers
// ============================================================
const BADGE_CLASSES = {
    'Governance & Ethics': 'badge-governance',
    'Infrastructure & Technology': 'badge-infrastructure',
    'Sectoral Innovation': 'badge-sectoral',
    'Social Impact & Inclusion': 'badge-social',
    'Safety & Security': 'badge-safety',
    'Future Foundations': 'badge-future',
    'Keynotes & Ceremonies': 'badge-keynotes',
};

function getCategoryBadgeClass(category) {
    return BADGE_CLASSES[category] || 'badge-governance';
}

function getCategoryColor(category) {
    return CATEGORIES[category]?.color || '#8b5cf6';
}

function getVideosByFilter() {
    let filtered = [...VIDEOS];

    if (state.activeCategory) {
        filtered = filtered.filter(v => v.category === state.activeCategory);
    }
    if (state.activeSubcategory) {
        filtered = filtered.filter(v => v.subcategory === state.activeSubcategory);
    }
    if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        filtered = filtered.filter(v =>
            v.title.toLowerCase().includes(q) ||
            v.category.toLowerCase().includes(q) ||
            v.subcategory.toLowerCase().includes(q)
        );
    }
    return filtered;
}

function getVideosCountByCategory(category) {
    return VIDEOS.filter(v => v.category === category).length;
}

function getVideosCountBySubcategory(category, subcategory) {
    return VIDEOS.filter(v => v.category === category && v.subcategory === subcategory).length;
}

// ============================================================
// Sidebar / Category Tree
// ============================================================
function renderCategoryTree() {
    const container = document.getElementById('categoryTree');
    container.innerHTML = '';

    for (const [catName, catConfig] of Object.entries(CATEGORIES)) {
        const count = getVideosCountByCategory(catName);
        const isExpanded = state.activeCategory === catName;
        const badgeClass = getCategoryBadgeClass(catName);

        const group = document.createElement('div');
        group.className = `category-group${isExpanded ? ' expanded' : ''}`;

        group.innerHTML = `
      <div class="category-header${state.activeCategory === catName && !state.activeSubcategory ? ' active' : ''}"
           data-category="${catName}"
           style="border-left-color: ${catConfig.color}">
        <span class="category-icon material-icons-round" style="color: ${catConfig.color}">${catConfig.icon}</span>
        <span class="category-name">${catName}</span>
        <span class="category-count">${count}</span>
        <span class="material-icons-round category-expand">expand_more</span>
      </div>
      <div class="subcategory-list">
        ${catConfig.subcategories.map(sub => {
            const subCount = getVideosCountBySubcategory(catName, sub);
            const isActive = state.activeSubcategory === sub && state.activeCategory === catName;
            return `
            <div class="subcategory-item${isActive ? ' active' : ''}"
                 data-category="${catName}" data-subcategory="${sub}">
              <span class="subcategory-dot" style="background: ${catConfig.color}"></span>
              <span class="subcategory-name">${sub}</span>
              <span class="subcategory-count">${subCount}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;

        // Category header click
        const header = group.querySelector('.category-header');
        header.addEventListener('click', () => {
            if (state.activeCategory === catName && !state.activeSubcategory) {
                // Toggle expand/collapse
                state.activeCategory = null;
            } else {
                state.activeCategory = catName;
                state.activeSubcategory = null;
            }
            renderCategoryTree();
            renderVideoGrid();
            updateFilterBar();
        });

        // Subcategory clicks
        group.querySelectorAll('.subcategory-item').forEach(item => {
            item.addEventListener('click', () => {
                const cat = item.dataset.category;
                const sub = item.dataset.subcategory;
                if (state.activeSubcategory === sub && state.activeCategory === cat) {
                    state.activeSubcategory = null;
                } else {
                    state.activeCategory = cat;
                    state.activeSubcategory = sub;
                }
                renderCategoryTree();
                renderVideoGrid();
                updateFilterBar();
            });
        });

        container.appendChild(group);
    }
}

// ============================================================
// Video Grid
// ============================================================
function renderVideoGrid() {
    const container = document.getElementById('videoGrid');
    const emptyState = document.getElementById('emptyState');
    const videos = getVideosByFilter();

    document.getElementById('resultsCount').textContent = `${videos.length} session${videos.length !== 1 ? 's' : ''}`;

    if (videos.length === 0) {
        container.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');

    container.innerHTML = videos.map(video => {
        const badgeClass = getCategoryBadgeClass(video.category);
        const color = getCategoryColor(video.category);
        const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
        const hasTranscript = TRANSCRIPT_IDS.has(video.id);
        const isFav = state.favorites.has(video.id);

        return `
      <div class="video-card" data-video-id="${video.id}" style="--card-accent-color: ${color}">
        <div class="card-thumbnail">
          <img src="${thumbnailUrl}" alt="${video.title}" loading="lazy">
          <span class="card-duration">${video.duration}</span>
          ${hasTranscript ? '<span class="card-transcript-badge" title="Transcript available"><span class="material-icons-round">description</span></span>' : ''}
          <button class="card-fav-btn${isFav ? ' active' : ''}" data-fav-id="${video.id}" title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
            <span class="material-icons-round">${isFav ? 'bookmark' : 'bookmark_border'}</span>
          </button>
          <div class="card-play-overlay">
            <div class="card-play-btn">
              <span class="material-icons-round">play_arrow</span>
            </div>
          </div>
        </div>
        <div class="card-body">
          <span class="card-category-badge ${badgeClass}">${video.subcategory}</span>
          <h3 class="card-title">${video.title}</h3>
          <div class="card-meta">
            <span class="card-subcategory">${video.category}</span>
            <a href="${video.url}" target="_blank" class="card-link" onclick="event.stopPropagation()">
              <span class="material-icons-round">open_in_new</span>
              YouTube
            </a>
          </div>
        </div>
      </div>
    `;
    }).join('');

    // Attach click handlers
    container.querySelectorAll('.video-card').forEach(card => {
        card.addEventListener('click', () => {
            const videoId = card.dataset.videoId;
            const video = VIDEOS.find(v => v.id === videoId);
            if (video) openVideoModal(video);
        });
    });

    // Attach favorite button handlers
    container.querySelectorAll('.card-fav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(btn.dataset.favId);
        });
    });
}

// ============================================================
// Filter Bar / Breadcrumb
// ============================================================
function updateFilterBar() {
    const breadcrumb = document.getElementById('breadcrumb');
    const parts = [];

    parts.push(`<span class="breadcrumb-item${!state.activeCategory ? ' active' : ''}" data-action="clear">All Sessions</span>`);

    if (state.activeCategory) {
        parts.push(`<span class="breadcrumb-separator">›</span>`);
        parts.push(`<span class="breadcrumb-item${!state.activeSubcategory ? ' active' : ''}" data-action="category">${state.activeCategory}</span>`);
    }

    if (state.activeSubcategory) {
        parts.push(`<span class="breadcrumb-separator">›</span>`);
        parts.push(`<span class="breadcrumb-item active" data-action="subcategory">${state.activeSubcategory}</span>`);
    }

    breadcrumb.innerHTML = parts.join('');

    // Breadcrumb clicks
    breadcrumb.querySelector('[data-action="clear"]')?.addEventListener('click', () => {
        state.activeCategory = null;
        state.activeSubcategory = null;
        renderCategoryTree();
        renderVideoGrid();
        updateFilterBar();
    });

    breadcrumb.querySelector('[data-action="category"]')?.addEventListener('click', () => {
        state.activeSubcategory = null;
        renderCategoryTree();
        renderVideoGrid();
        updateFilterBar();
    });
}

// ============================================================
// Search
// ============================================================
function initSearch() {
    const input = document.getElementById('searchInput');

    let debounceTimer;
    input.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            state.searchQuery = input.value.trim();
            renderVideoGrid();
        }, 200);
    });

    // Cmd+K shortcut
    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            input.focus();
        }
        if (e.key === 'Escape') {
            input.blur();
            if (document.getElementById('videoModal').classList.contains('hidden') === false) {
                closeVideoModal();
            }
        }
    });
}

// ============================================================
// View Toggle
// ============================================================
function initViewToggle() {
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const view = btn.dataset.view;
            state.viewMode = view;
            const grid = document.getElementById('videoGrid');
            grid.classList.toggle('list-view', view === 'list');
        });
    });
}

// ============================================================
// Video Modal
// ============================================================
function openVideoModal(video) {
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('modalPlayer');
    const title = document.getElementById('modalTitle');
    const category = document.getElementById('modalCategory');
    const duration = document.getElementById('modalDuration');
    const transcriptContent = document.getElementById('transcriptContent');

    title.textContent = video.title;
    player.src = `https://www.youtube.com/embed/${video.id}?autoplay=1`;

    const badgeClass = getCategoryBadgeClass(video.category);
    category.className = `modal-category-badge ${badgeClass}`;
    category.textContent = `${video.category} › ${video.subcategory}`;

    duration.innerHTML = `<span class="material-icons-round" style="font-size:16px">schedule</span> ${video.duration}`;

    // Load transcript
    loadTranscript(video.id, transcriptContent);

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('modalPlayer');
    player.src = '';
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function initModal() {
    document.getElementById('modalCloseBtn').addEventListener('click', closeVideoModal);
    document.getElementById('videoModal').addEventListener('click', (e) => {
        if (e.target.id === 'videoModal') closeVideoModal();
    });
}

// ============================================================
// Transcripts
// ============================================================
async function loadTranscript(videoId, container) {
    container.innerHTML = '<p class="transcript-loading">Loading transcript...</p>';

    // Check local cache
    if (state.transcripts[videoId]) {
        renderTranscript(state.transcripts[videoId], container);
        return;
    }

    // Try to fetch from transcripts/ directory
    try {
        const response = await fetch(`transcripts/${videoId}.txt`);
        if (response.ok) {
            const text = await response.text();
            state.transcripts[videoId] = text;
            renderTranscript(text, container);
            return;
        }
    } catch (e) { /* ignore */ }

    container.innerHTML = `
    <p class="transcript-loading">
      Transcript not available for this session.<br>
      <small style="color:var(--text-muted)">YouTube auto-captions are not yet available for this video. Transcripts are available for ${TRANSCRIPT_IDS.size} other sessions — try those sessions or use the chat to search across available transcripts.</small>
    </p>
  `;
}

function renderTranscript(text, container) {
    // Split long transcript into readable paragraphs (every ~500 chars at sentence boundary)
    const words = text.split(/\s+/);
    const paragraphs = [];
    let current = '';
    for (const word of words) {
        current += (current ? ' ' : '') + word;
        if (current.length > 500 && /[.!?]$/.test(word)) {
            paragraphs.push(current);
            current = '';
        }
    }
    if (current) paragraphs.push(current);
    container.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
}

// ============================================================
// Chat Panel
// ============================================================
function initChat() {
    const panel = document.getElementById('chatPanel');
    const toggleBtn = document.getElementById('chatToggleBtn');
    const closeBtn = document.getElementById('chatCloseBtn');
    const sendBtn = document.getElementById('chatSendBtn');
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');

    toggleBtn.addEventListener('click', () => {
        state.chatOpen = !state.chatOpen;
        panel.classList.toggle('open', state.chatOpen);
    });

    closeBtn.addEventListener('click', () => {
        state.chatOpen = false;
        panel.classList.remove('open');
    });

    // Send message
    function sendMessage() {
        const query = input.value.trim();
        if (!query) return;
        input.value = '';
        input.style.height = 'auto';
        addChatMessage('user', query);
        processQuery(query);
    }

    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // Auto-resize textarea
    input.addEventListener('input', () => {
        input.style.height = 'auto';
        input.style.height = Math.min(input.scrollHeight, 100) + 'px';
    });

    // Suggestion clicks
    document.querySelectorAll('.chat-suggestion').forEach(btn => {
        btn.addEventListener('click', () => {
            const q = btn.dataset.q;
            input.value = q;
            sendMessage();
        });
    });
}

function addChatMessage(role, content) {
    const messages = document.getElementById('chatMessages');
    // Remove welcome if present
    const welcome = messages.querySelector('.chat-welcome');
    if (welcome) welcome.remove();

    const msgEl = document.createElement('div');
    msgEl.className = `chat-message ${role}`;
    msgEl.innerHTML = `<div class="message-bubble">${content}</div>`;
    messages.appendChild(msgEl);
    messages.scrollTop = messages.scrollHeight;
}

function addTypingIndicator() {
    const messages = document.getElementById('chatMessages');
    const indicator = document.createElement('div');
    indicator.className = 'chat-message assistant';
    indicator.id = 'typingIndicator';
    indicator.innerHTML = `
    <div class="message-bubble">
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    </div>
  `;
    messages.appendChild(indicator);
    messages.scrollTop = messages.scrollHeight;
}

function removeTypingIndicator() {
    document.getElementById('typingIndicator')?.remove();
}

async function processQuery(query) {
    addTypingIndicator();

    // Small delay for UX
    await new Promise(r => setTimeout(r, 600));
    removeTypingIndicator();

    const queryLower = query.toLowerCase();
    const queryWords = queryLower.split(/\s+/).filter(w => w.length > 2);

    // 1. Search transcripts
    const transcriptResults = searchTranscripts(queryWords);

    // 2. Search ALL video titles (excluding ones already found via transcript)
    const transcriptVideoIds = new Set(transcriptResults.map(r => r.videoId));
    const titleResults = searchTitles(queryWords).filter(v => !transcriptVideoIds.has(v.id));

    // 3. Build combined response
    let response = '';

    if (transcriptResults.length > 0) {
        response += `<p>Found relevant content in <strong>${transcriptResults.length}</strong> session transcript${transcriptResults.length > 1 ? 's' : ''}:</p>`;
        response += transcriptResults.slice(0, 4).map(r => `
      <div class="message-source">
        <div class="message-source-title">${r.title}</div>
        <div class="message-source-excerpt">"...${r.excerpt}..."</div>
        <a class="message-source-link" href="${r.url}" target="_blank">
          <span class="material-icons-round" style="font-size:12px">play_circle</span>
          Watch on YouTube
        </a>
      </div>
    `).join('');

        if (transcriptResults.length > 4) {
            response += `<p style="font-size:0.75rem;color:var(--text-tertiary);margin-top:8px">...and ${transcriptResults.length - 4} more transcript matches.</p>`;
        }
    }

    if (titleResults.length > 0) {
        if (transcriptResults.length > 0) {
            response += `<p style="margin-top:12px">Also found <strong>${titleResults.length}</strong> more related sessions by topic:</p>`;
        } else {
            response += `<p>Found <strong>${titleResults.length}</strong> related sessions:</p>`;
        }
        response += titleResults.slice(0, 5).map(v => `
      <div class="message-source">
        <div class="message-source-title">${v.title}</div>
        <div class="message-source-excerpt">${v.category} › ${v.subcategory} • ${v.duration}</div>
        <a class="message-source-link" href="${v.url}" target="_blank">
          <span class="material-icons-round" style="font-size:12px">play_circle</span>
          Watch on YouTube
        </a>
      </div>
    `).join('');

        if (titleResults.length > 5) {
            response += `<p style="font-size:0.75rem;color:var(--text-tertiary);margin-top:8px">...and ${titleResults.length - 5} more sessions. Try browsing the "${matchBestCategory(queryWords)}" category.</p>`;
        }
    }

    if (transcriptResults.length === 0 && titleResults.length === 0) {
        response = `<p>I couldn't find sessions matching that query. Try broader terms like "healthcare", "governance", "startup", or "education".</p>`;
    }

    addChatMessage('assistant', response);
}

function searchTranscripts(queryWords) {
    const results = [];

    for (const [videoId, text] of Object.entries(state.transcripts)) {
        const textLower = text.toLowerCase();
        const matchCount = queryWords.filter(w => textLower.includes(w)).length;

        if (matchCount >= Math.ceil(queryWords.length * 0.4)) {
            const video = VIDEOS.find(v => v.id === videoId);
            if (!video) continue;

            // Find best excerpt
            const sentences = text.split(/[.!?]+/);
            let bestExcerpt = '';
            let bestScore = 0;

            for (const sent of sentences) {
                const sentLower = sent.toLowerCase();
                const score = queryWords.filter(w => sentLower.includes(w)).length;
                if (score > bestScore) {
                    bestScore = score;
                    bestExcerpt = sent.trim().substring(0, 200);
                }
            }

            results.push({
                title: video.title,
                url: video.url,
                videoId: video.id,
                excerpt: bestExcerpt || text.substring(0, 200),
                score: matchCount,
            });
        }
    }

    return results.sort((a, b) => b.score - a.score);
}

function searchTitles(queryWords) {
    return VIDEOS.filter(v => {
        const titleLower = v.title.toLowerCase();
        const catLower = v.category.toLowerCase();
        const subLower = v.subcategory.toLowerCase();
        const combined = `${titleLower} ${catLower} ${subLower}`;
        return queryWords.some(w => combined.includes(w));
    }).sort((a, b) => {
        const aScore = queryWords.filter(w =>
            `${a.title} ${a.category} ${a.subcategory}`.toLowerCase().includes(w)
        ).length;
        const bScore = queryWords.filter(w =>
            `${b.title} ${b.category} ${b.subcategory}`.toLowerCase().includes(w)
        ).length;
        return bScore - aScore;
    });
}

function matchBestCategory(queryWords) {
    let bestCat = '';
    let bestScore = 0;

    for (const [catName, catConfig] of Object.entries(CATEGORIES)) {
        const combined = `${catName} ${catConfig.subcategories.join(' ')}`.toLowerCase();
        const score = queryWords.filter(w => combined.includes(w)).length;
        if (score > bestScore) {
            bestScore = score;
            bestCat = catName;
        }
    }

    return bestCat || 'Social Impact & Inclusion';
}

// ============================================================
// Sidebar Toggle
// ============================================================
function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mobileBtn = document.getElementById('mobileSidebarBtn');
    const showAllBtn = document.getElementById('showAllBtn');

    mobileBtn?.addEventListener('click', () => {
        sidebar.classList.toggle('mobile-open');
    });

    showAllBtn.addEventListener('click', () => {
        state.activeCategory = null;
        state.activeSubcategory = null;
        state.searchQuery = '';
        document.getElementById('searchInput').value = '';
        renderCategoryTree();
        renderVideoGrid();
        updateFilterBar();
    });
}

// ============================================================
// Preload transcripts
// ============================================================
async function preloadTranscripts() {
    // Only fetch transcripts we know exist
    const loaded = [];
    const promises = [...TRANSCRIPT_IDS].map(async (videoId) => {
        try {
            const resp = await fetch(`transcripts/${videoId}.txt`);
            if (resp.ok) {
                const text = await resp.text();
                state.transcripts[videoId] = text;
                loaded.push(videoId);
            }
        } catch (e) { /* skip */ }
    });
    await Promise.all(promises);
    if (loaded.length > 0) {
        console.log(`📚 Loaded ${loaded.length} transcripts for chat search`);
    }
}

// ============================================================
// Initialize
// ============================================================
function init() {
    loadFavorites();
    renderCategoryTree();
    renderVideoGrid();
    renderFavorites();
    updateFilterBar();
    initSearch();
    initViewToggle();
    initModal();
    initChat();
    initSidebar();

    // Update stats
    document.getElementById('totalVideos').textContent = VIDEOS.length;

    // Preload transcripts in background
    setTimeout(preloadTranscripts, 1000);

    console.log(`🚀 AI Summit Explorer loaded: ${VIDEOS.length} sessions across ${Object.keys(CATEGORIES).length} categories`);
}

// ============================================================
// Favorites Rendering
// ============================================================
function renderFavorites() {
    const list = document.getElementById('favoritesList');
    const count = document.getElementById('favoritesCount');
    const favVideos = VIDEOS.filter(v => state.favorites.has(v.id));

    count.textContent = favVideos.length;

    if (favVideos.length === 0) {
        list.innerHTML = '<p class="favorites-empty">No favorites yet. Click the bookmark icon on any video to save it.</p>';
        return;
    }

    list.innerHTML = favVideos.map(v => {
        const badgeClass = getCategoryBadgeClass(v.category);
        return `
      <div class="favorite-item" data-video-id="${v.id}">
        <img class="favorite-thumb" src="https://img.youtube.com/vi/${v.id}/default.jpg" alt="">
        <div class="favorite-info">
          <span class="favorite-title">${v.title}</span>
          <span class="favorite-meta">${v.duration}</span>
        </div>
        <button class="favorite-remove" data-fav-id="${v.id}" title="Remove from favorites">
          <span class="material-icons-round">close</span>
        </button>
      </div>
    `;
    }).join('');

    // Click to open video
    list.querySelectorAll('.favorite-item').forEach(item => {
        item.addEventListener('click', () => {
            const video = VIDEOS.find(v => v.id === item.dataset.videoId);
            if (video) openVideoModal(video);
        });
    });

    // Remove button
    list.querySelectorAll('.favorite-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(btn.dataset.favId);
        });
    });
}

document.addEventListener('DOMContentLoaded', init);
