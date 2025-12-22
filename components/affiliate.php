<section id="affiliate" class="relative w-full py-24 bg-[#faf4f8] overflow-hidden reveal">
    <div class="max-w-7xl mx-auto px-6">

        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div class="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-[#d65d73] opacity-[0.03] rounded-full blur-3xl"></div>
            <div class="absolute top-[20%] right-[0%] w-[300px] h-[300px] bg-[#d65d73] opacity-[0.05] rounded-full blur-3xl"></div>
        </div>

        <div class="relative max-w-7xl mx-auto px-6">

            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                    <?= t('affiliate_title_1') ?><br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#d65d73] to-[#ff8fa3]">
                        <?= t('affiliate_title_2') ?>
                    </span>
                </h2>

                <p class="text-lg text-gray-500 leading-relaxed">
                    <?= t('affiliate_subtitle') ?>
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">

                <div class="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-[#d65d73]/5 border border-white/50 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#faf4f8] to-white rounded-bl-full -mr-10 -mt-10 z-0"></div>

                    <div class="relative z-10">
                        <h3 class="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <svg class="w-6 h-6 text-[#d65d73]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                            <?= t('aff_card1_title') ?>
                        </h3>

                        <div class="grid sm:grid-cols-2 gap-8">
                            <div class="bg-[#faf4f8] rounded-2xl p-6 border border-[#d65d73]/10">
                                <p class="text-sm font-semibold text-gray-500 uppercase mb-2"><?= t('aff_ben1_label') ?></p>
                                <div class="flex items-baseline gap-1">
                                    <span class="text-5xl font-bold text-[#d65d73]"><?= t('aff_ben1_value') ?></span>
                                    <span class="text-lg text-gray-600 font-medium"><?= t('aff_ben1_sub') ?></span>
                                </div>
                                <p class="text-xs text-gray-400 mt-2"><?= t('aff_ben1_desc') ?></p>
                            </div>

                            <div class="space-y-5">
                                <div class="flex items-start gap-3">
                                    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-[#d65d73]/10 flex items-center justify-center text-[#d65d73]">
                                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold text-gray-900"><?= t('aff_ben2_title') ?></h4>
                                        <p class="text-sm text-gray-500"><?= t('aff_ben2_desc') ?></p>
                                    </div>
                                </div>

                                <div class="flex items-start gap-3">
                                    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-[#d65d73]/10 flex items-center justify-center text-[#d65d73]">
                                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold text-gray-900"><?= t('aff_ben3_title') ?></h4>
                                        <p class="text-sm text-gray-500"><?= t('aff_ben3_desc') ?></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-5 bg-gray-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden group hover:-translate-y-1 transition-all duration-500">
                    <div class="absolute bottom-0 right-0 w-64 h-64 bg-[#d65d73] opacity-20 blur-[80px]"></div>

                    <div class="relative z-10 h-full flex flex-col justify-between">
                        <div>
                            <h3 class="text-2xl font-bold mb-8"><?= t('aff_card2_title') ?></h3>

                            <ul class="space-y-6 relative border-l border-gray-700 ml-3 pl-8">
                                <li class="relative">
                                    <span class="absolute -left-[39px] w-5 h-5 rounded-full bg-gray-800 border-2 border-[#d65d73] z-10"></span>
                                    <p class="text-gray-300 text-sm"><?= t('aff_step1_num') ?></p>
                                    <p class="font-semibold text-lg"><?= t('aff_step1_title') ?></p>
                                </li>
                                <li class="relative">
                                    <span class="absolute -left-[39px] w-5 h-5 rounded-full bg-gray-800 border-2 border-gray-600 z-10 group-hover:border-[#d65d73] transition-colors duration-300 delay-100"></span>
                                    <p class="text-gray-300 text-sm"><?= t('aff_step2_num') ?></p>
                                    <p class="font-semibold text-lg"><?= t('aff_step2_title') ?></p>
                                </li>
                                <li class="relative">
                                    <span class="absolute -left-[39px] w-5 h-5 rounded-full bg-gray-800 border-2 border-gray-600 z-10 group-hover:border-[#d65d73] transition-colors duration-300 delay-200"></span>
                                    <p class="text-gray-300 text-sm"><?= t('aff_step3_num') ?></p>
                                    <p class="font-semibold text-lg"><?= t('aff_step3_title') ?></p>
                                </li>
                            </ul>
                        </div>

                        <div class="mt-8 pt-6 border-t border-gray-800 flex items-center justify-between">
                            <div class="flex -space-x-2">
                                <div class="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-900"></div>
                                <div class="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-900"></div>
                                <div class="w-8 h-8 rounded-full bg-gray-500 border-2 border-gray-900 flex items-center justify-center text-[10px] font-bold">+1k</div>
                            </div>
                            <div class="text-right">
                                <span class="block text-xs text-[#d65d73] font-bold tracking-wider"><?= t('aff_spots_label') ?></span>
                                <span class="text-sm text-gray-400"><?= t('aff_spots_count') ?></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center justify-center text-center">
                <p class="text-gray-500 mb-6 font-medium"><?= t('aff_ideal_for') ?></p>

                <a href="https://weddo.me" class="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-[#d65d73] font-lg rounded-xl hover:bg-[#c04d63] hover:shadow-lg hover:shadow-[#d65d73]/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d65d73]">
                    <span class="mr-2"><?= t('aff_btn_join') ?></span>
                    <svg class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>