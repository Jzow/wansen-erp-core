export default {
    productStock: {
        title: '商品库存报表',
        export: '导出',
        regularPrint: '普通打印',
        data: '商品库存数据',
        detail: '商品库存明细',
        header: {
            warehouse: '仓库',
            productInfo: '商品信息',
            productCategory: '商品分类',
            warehouseShelves: '仓库货架',
        },
        table: {
            flow: '流水',
            stockFlow: '库存流水',
            productBarcode: '商品条码',
            warehouse: '仓库',
            productName: '商品名称',
            productCategory: '商品分类',
            standard: '规格',
            model: '型号',
            weight: '基础重量',
            color: '颜色',
            unit: '单位',
            warehouseShelves: '仓库货架',
            unitPrice: '单价',
            initStock: '初始库存',
            currentStock: '当前库存',
            stockAmount: '库存金额',
            total: '合计',
            notice: '当前查询条件下无数据可导出',
        }
    },
    account: {
        title: '账户统计报表',
        export: '导出',
        regularPrint: '普通打印',
        data: '账户统计数据',
        detail: '账户统计明细',
        notice: '当前查询条件下无数据可导出',
        header: {
            account: '账户',
            accountNumber: '账户编号',
        },
        table: {
            flow: '流水',
            accountFlow: '账户流水',
            accountName: '账户名称',
            accountNumber: '账户编号',
            initialAmount: '初始金额',
            thisMonthAmount: '本月金额',
            currentAmount: '当前金额',
            total: '合计',
        }
    },
    retail: {
        title: '零售统计报表',
        export: '导出',
        regularPrint: '普通打印',
        data: '零售统计数据',
        detail: '零售统计明细',
        notice: '当前查询条件下无数据可导出',
        header: {
            productInfo: '商品信息',
            receiptDate: '单据日期',
            startDate: '开始日期',
            endDate: '结束日期',
            member: '会员',
        },
        table: {
            barCode: '条码',
            warehouse: '仓库',
            name: '名称',
            standard: '规格',
            model: '型号',
            extendInfo: '扩展信息',
            unit: '单位',
            quantity: '数量',
            amount: '金额',
            refundQuantity: '退货数量',
            refundAmount: '退货金额',
            actualAmount: '实际金额',
            total: '合计',
        }
    },
    purchase: {
        title: '采购统计报表',
        export: '导出',
        regularPrint: '普通打印',
        data: '采购统计数据',
        detail: '采购统计明细',
        notice: '当前查询条件下无数据可导出',
        header: {
            productInfo: '商品信息',
            receiptDate: '单据日期',
            startDate: '开始日期',
            endDate: '结束日期',
            supplier: '供应商',
        },
        table: {
            barCode: '条码',
            warehouse: '仓库',
            name: '商品名称',
            standard: '规格',
            model: '型号',
            extendInfo: '扩展信息',
            unit: '单位',
            quantity: '采购数量',
            amount: '采购金额',
            refundQuantity: '采购退货数量',
            refundAmount: '采购退货金额',
            actualAmount: '实际采购金额',
            purchaseDate: '采购时间',
            total: '合计',
        }
    },
    sales: {
        title: '销售统计报表',
        export: '导出',
        regularPrint: '普通打印',
        data: '销售统计数据',
        detail: '销售统计明细',
        notice: '当前查询条件下无数据可导出',
        header: {
            productInfo: '商品信息',
            receiptDate: '单据日期',
            startDate: '开始日期',
            endDate: '结束日期',
            customer: '客户',
        },
        table: {
            barCode: '条码',
            warehouse: '仓库',
            name: '商品名称',
            standard: '规格',
            model: '型号',
            extendInfo: '扩展信息',
            unit: '单位',
            quantity: '销售数量',
            amount: '销售金额',
            refundQuantity: '销售退货数量',
            refundAmount: '销售退货金额',
            actualAmount: '实际销售金额',
            total: '合计',
        }
    },
    shipmentsDetail: {
        title: '出库明细报表',
        export: '导出',
        regularPrint: '普通打印',
        data: '出库明细数据',
        detail: '出库明细',
        notice: '当前查询条件下无数据可导出',
        header: {
            receiptNumber: '单据编号',
            productInfo: '商品信息',
            receiptDate: '单据日期',
            startDate: '开始日期',
            endDate: '结束日期',
            contact: '往来人员',
            warehouse: '仓库',
            operator: '操作人',
            remark: '单据备注',
        },
        table: {
            receiptNumber: '单据编号',
            type: '类型',
            contact: '往来人员',
            barCode: '条码',
            warehouse: '仓库',
            name: '商品名称',
            standard: '规格',
            model: '型号',
            unit: '单位',
            quantity: '数量',
            unitPrice: '单价',
            amount: '金额',
            taxRate: '税率(%)',
            taxAmount: '税额',
            shipmentsDate: '出库时间',
            total: '合计',
        }
    },
    storageDetail: {
        title: '入库明细报表',
        export: '导出',
        regularPrint: '普通打印',
        data: '入库明细数据',
        detail: '入库明细',
        notice: '当前查询条件下无数据可导出',
        header: {
            receiptNumber: '单据编号',
            productInfo: '商品信息',
            receiptDate: '单据日期',
            startDate: '开始日期',
            endDate: '结束日期',
            contact: '往来人员',
            warehouse: '仓库',
            operator: '操作人',
            remark: '单据备注',
        },
        table: {
            receiptNumber: '单据编号',
            type: '类型',
            contact: '往来人员',
            barCode: '条码',
            warehouse: '仓库',
            name: '商品名称',
            standard: '规格',
            model: '型号',
            unit: '单位',
            quantity: '数量',
            unitPrice: '单价',
            amount: '金额',
            taxRate: '税率(%)',
            taxAmount: '税额',
            storageDate: '入库时间',
            total: '合计',
        }
    },
    shipmentsSummary: {
        title: '出库汇总报表',
        export: '导出',
        regularPrint: '普通打印',
        data: '出库汇总数据',
        detail: '出库汇总',
        notice: '当前查询条件下无数据可导出',
        header: {
            productInfo: '商品信息',
            receiptDate: '单据日期',
            startDate: '开始日期',
            endDate: '结束日期',
            contact: '往来人员',
            warehouse: '仓库',
        },
        table: {
            barCode: '商品条码',
            warehouse: '仓库',
            name: '商品名称',
            category: '商品分类',
            standard: '规格',
            model: '型号',
            unit: '单位',
            quantity: '出库数量',
            amount: '出库金额',
            shipmentsDate: '出库时间',
            total: '合计',
        }
    },
    storageSummary: {
        title: '入库汇总报表',
        export: '导出',
        regularPrint: '普通打印',
        data: '入库汇总数据',
        detail: '入库汇总',
        notice: '当前查询条件下无数据可导出',
        header: {
            productInfo: '商品信息',
            receiptDate: '单据日期',
            startDate: '开始日期',
            endDate: '结束日期',
            contact: '往来人员',
            warehouse: '仓库',
        },
        table: {
            barCode: '商品条码',
            warehouse: '仓库',
            name: '商品名称',
            category: '商品分类',
            standard: '规格',
            model: '型号',
            unit: '单位',
            quantity: '入库数量',
            amount: '入库金额',
            storageDate: '入库时间',
            total: '合计',
        }
    },
    customerBill: {
        title: '客户对账报表',
        export: '导出',
        regularPrint: '普通打印',
        data: '客户对账数据',
        detail: '客户对账',
        notice: '当前查询条件下无数据可导出',
        header: {
            customer: '客户',
            billDate: '账单日期',
            startDate: '开始日期',
            endDate: '结束日期',
        },
        table: {
            arrearsDetail: '欠款详情',
            detail: '详情',
            customer: '客户',
            contacts: '联系人',
            contactNumber: '联系电话',
            email: '电子邮箱',
            firstQuarterCollection: '一季度应收账款',
            secondQuarterCollection: '二季度应收账款',
            thirdQuarterCollection: '三季度应收账款',
            fourthQuarterCollection: '四季度应收账款',
            totalArrears: '累计欠款',
            totalCollection: '累计收款',
            receivableArrears: '应收欠款',
            helpMessage: '应收欠款=4个季度的应收账款+累计欠款',
            total: '合计',
        }
    },
    supplierBill: {
        title: '供应商对账报表',
        export: '导出',
        regularPrint: '普通打印',
        data: '供应商对账数据',
        detail: '供应商对账',
        notice: '当前查询条件下无数据可导出',
        header: {
            supplier: '供应商',
            billDate: '账单日期',
            startDate: '开始日期',
            endDate: '结束日期',
        },
        table: {
            arrearsDetail: '欠款详情',
            detail: '详情',
            supplier: '供应商',
            contacts: '联系人',
            contactNumber: '联系电话',
            email: '电子邮箱',
            firstQuarterPayment: '一季度应付账款',
            secondQuarterPayment: '二季度应付账款',
            thirdQuarterPayment: '三季度应付账款',
            fourthQuarterPayment: '四季度应付账款',
            totalArrears: '累计欠款',
            totalPayment: '累计付款',
            payableArrears: '应付欠款',
            helpMessage: '应付欠款=4个季度的应付账款+累计欠款',
            total: '合计',
        }
    },
    other: {
        viewAccountFlow: '查看账户流水',
        viewAccountFlowHelpMessage: '账户的流水统计是由前往后，最后面的余额是最终余额',
        thisReceiptArrears: '本单欠款',
        paidArrears: '已付欠款',
        receivedArrears: '已收欠款',
        receivableArrears: '待收欠款',
        balance: '余额',
        subType: '收款/付款方',
        customerArrearsDetail: '客户欠款详情',
        customerArrearsData: '客户欠款数据',
        viewProductStockFlow: '查看商品库存流水',
        stockFlowDetailData: '库存流水明细数据',
        supplierArrearsDetail: '供应商欠款详情',
        supplierArrearsData: '供应商欠款数据',
    }
}